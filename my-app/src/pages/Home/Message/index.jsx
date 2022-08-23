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

    pushShow = (id, title) => {
        this.props.history.push('/home/message/detail',{id, title})
    }

    replaceShow = (id, title) => {
        this.props.history.replace('/home/message/detail',{id, title})
    }

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
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
                                    {/*Link添加replace会替换栈里面最前面的地址*/}
                                    <Link replace to={{
                                        pathname: '/home/message/detail',
                                        state: {id: MsgObj.id, title: MsgObj.title}
                                    }}>{MsgObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={() => {this.pushShow(MsgObj.id, MsgObj.title)}}>push查看</button>&nbsp;
                                    <button onClick={() => {this.replaceShow(MsgObj.id, MsgObj.title)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
                <button onClick={() => {this.forward()}}>前进</button>
                <button onClick={() => {this.back()}}>后退</button>
            </div>

        );
    }
}

export default Message;