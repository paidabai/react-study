import React, {Component} from 'react';
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../Components/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;