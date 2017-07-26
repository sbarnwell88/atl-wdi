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

router.get('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    
    // User.findById(userId)
    //     .then((user) => {

    //         const foundItem = user.items.filter((item) => {
    //             return item._id === itemId
    //         });
    //         res.send(user.items);
    //     })
    //     .catch((error) => {
    //         console.log('Failed to find user');
    //     })
    
})

module.exports = router;