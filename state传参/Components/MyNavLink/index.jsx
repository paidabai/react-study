import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            /*需要添加class属性使用NavLink标签,activeClassName="添加的属性名",属性名为active可以以省略*/
            /*标签体内容会存在children属性通过props传递*/
            <NavLink className="list-group-item" {...this.props} />
        );
    }
}

export default MyNavLink;