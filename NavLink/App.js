import React, {Component} from 'react'
import {NavLink, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./Components/Header";


export default class app extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html跳转页面*/}
                            {/*<a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a>*/}
                            {/*需要添加class属性使用NavLink标签,activeClassName="添加的属性名",属性名为active可以以省略*/}
                            <NavLink className="list-group-item" to="/about">about</NavLink>
                            <NavLink className="list-group-item" to="/home">home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About}></Route>
                                <Route path="/home" component={Home}></Route>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
