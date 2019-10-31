import React, {Component} from 'react';
import './MyHeader.css'

class MyHeader extends Component{
    render() {
        return (
            <div className="flex-container">
                <div>
                    <a href="*" className="icon">
                    <i className="fa fa-bars fa-4x"></i>
                    </a>
                </div>
                <div>
                <h1>Main Menu</h1>
                </div>
            </div>
        )
    }
}

export default MyHeader;