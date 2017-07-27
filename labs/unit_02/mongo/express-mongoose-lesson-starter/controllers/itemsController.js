const express = require('express');

const User = require('../models/user');

const router = express.Router({ mergeParams: true });

// 5978b8899fbfd306149184eb

router.get('/', (req, res) => {
    const userIdToFind = req.params.userId;

    User.findById(userIdToFind)
        .then((user) => {
            res.render(
                'items/index',
                { 
                    userName: user.first_name,
                    items: user.items,
                    userId: user._id
                }
            )

        })

});

// render new form

router.get('/new', (req, res) => {
    res.req(
        'items/new',
        {userId: req.params.userId}
    )
})

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const newItemInfo = req.body;

    User.findById(userId)
        .then((user) => {
            const newItem = new Item(newItemInfo);

            user.items.push(newItem);

            user.save()
                .then((user) => {
                    res.render(
                        'items/show',
                    )
                })
        })

})

router.get('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    
    User.findById(userId)
        .then((user) => {

            const foundItem = user.items.find((item) => {
                return item.id === itemId
            });

            res.render(
                'items/show',
                {
                    userId,
                    userName: user.first_name,
                    itemId: foundItem._id,
                    itemName: foundItem.name
                }
            )
        })
        .catch((error) => {
            console.log('Failed to find user');
        })
    
})

// ROUTE THAT RENDERS THE EDIT FORM
router.get('/:itemId/edit', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
        .then((user) => {
            const foundItem = user.items.find((item) => {
                return item.id === itemId;
            })
            res.render('items/edit', {
                userId,
                item: foundItem
            });
        })
    
});
// UPDATE ITEM
router.put('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
        .then((user) => {
            const foundItem = user.items.find((item) => {
                return item.id === itemId;
            })

            foundItem.name = req.body.name;

            user.save()
                .then((user) => {
                    
                    res.render(
                        'items/index',
                        { 
                            userName: user.first_name,
                            items: user.items,
                            userId: user._id
                        }
                    )
                })
        })
})

router.get('/:itemId/delete', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
        .then((user) => {
            const itemToDelete = user.items.find((item) => {
                return item.id === itemId;
            })

            const indexToDelete = user.items.indexOf(itemToDelete);

            user.items.splice(indexToDelete, 1);

            user.save().then((user) => {
                
                    res.render(
                        'items/index',
                        { 
                            userName: user.first_name,
                            items: user.items,
                            userId: user._id
                        }
                    )
            })


        })
})



module.exports = router;