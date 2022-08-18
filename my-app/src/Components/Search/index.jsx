import React, { Component } from 'react'
import axiox from 'axios'

export default class Search extends Component {

    search = () => {
        //获取input输入框的数据（连续解构赋值）
        const { keyWordElement: { value: keyWord } } = this
        this.props.upDataAppState({isLoading: true, isFirst: false})
        //axios向github发送请求获取用户数据
        axiox.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
            response => {
                this.props.upDataAppState({isLoading:false, users:response.data.items})
            },
            error => {
                this.props.upDataAppState({isLoading:false, err:error.message})
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
