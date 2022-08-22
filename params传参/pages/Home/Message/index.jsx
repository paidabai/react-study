import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {

    state = {
        Message: [
            {id: 1, title: "阿光"},
            {id: 2, title: "邱哥"},
            {id: 3, title: "李某人"}
        ]
    }

    render() {
        const {Message} = this.state
        return (
            <div>
                <ul>
                    {
                        Message.map((MsgObj) => {
                            return (
                                <li key={MsgObj.id}>
                                    <Link
                                        to={`/Home/Message/Detail/${MsgObj.id}/${MsgObj.title}`}>{MsgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        );
    }
}

export default Message;