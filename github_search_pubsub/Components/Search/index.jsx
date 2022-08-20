import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axiox from 'axios'

export default class Search extends Component {

    search = () => {
        //获取input输入框的数据（连续解构赋值）
        const { keyWordElement: { value: keyWord } } = this
        //将获取数据时改变加载状态
        PubSub.publish('setState', {isLoading: true, isFirst: false})
        // this.props.upDataAppState({isLoading: true, isFirst: false})
        //axios向github发送请求获取用户数据
        axiox.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('setState', {isLoading:false, users:response.data.items})
                // this.props.upDataAppState({isLoading:false, users:response.data.items})
            },
            error => {
                PubSub.publish('setState', {isLoading:false, err:error.message})
                // this.props.upDataAppState({isLoading:false, err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="请输入用户名" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
