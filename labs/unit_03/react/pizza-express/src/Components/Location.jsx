import React, { Component } from 'react';

class Location extends Component {
    render(){
        return (
            <div className="location">
                <p>{this.props.places.name}</p>
                <strong>Address: </strong>
                <p>{this.props.places.address}</p>
                <strong>Phone: </strong>
                <p>{this.props.places.phone}</p>
             </div> 
        )
    }
}

export default Location;