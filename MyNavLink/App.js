import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./Components/Header";
import MyNavLink from "./Components/MyNavLink";


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
                            <MyNavLink to="/About">About</MyNavLink>
                            <MyNavLink to="/Home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*Switch当路由匹配到后不在向下匹配，提高匹配效率*/}
                                <Switch>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home" component={Home}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
