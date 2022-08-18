import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'

export default class app extends Component {

    state = {
        users: [],
        isFirst: true,//是否第一次加载
        isLoading: false,//是否正在搜索
        err: ''
    }

    upDataAppState = (stateObj) => {
        this.setState({ ...stateObj })
    }

    render() {
        return (
            <div className="container">
                <Search upDataAppState={this.upDataAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
