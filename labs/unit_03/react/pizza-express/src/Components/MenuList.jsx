import React, {Component} from 'react';
import menuData from '../pizzaData.js';
import MenuItem from './MenuItem';


class MenuList extends Component {
    render() {
        return (
            <div className="menu">
                <h1>Menu</h1>
            <div className="menu-container">
            {menuData.map((items, i) => {
                return <MenuItem key={i} menu={items}/>
            })}
            </div>
            </div>
        )
    }
}

export default MenuList;