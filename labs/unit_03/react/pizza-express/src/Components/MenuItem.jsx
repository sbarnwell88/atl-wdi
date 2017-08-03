import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return(
                <div id="menu" className="menu-item">
                    <img src={this.props.menu.image}/>
                        <div className="menu-description">
                            <div className="menu-item-name">{this.props.menu.name}</div>
                            <div>
                                <strong>Price</strong>
                                {this.props.menu.price}
                            </div>
                            <div>{this.props.menu.description}</div>
                        </div>
                    </div>
        )
    }
}

export default MenuItem;