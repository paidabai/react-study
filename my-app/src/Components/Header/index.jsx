import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={() => {this.forward()}}>前进</button>
                <button onClick={() => {this.back()}}>后退</button>
            </div>
        );
    }
}

//withRouter加工一般组件，让一般组件拥有路由组件的API
export default withRouter(Header);