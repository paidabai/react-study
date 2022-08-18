import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入用户名进行搜索</h2> :
                    isLoading ? <h2>正在搜索中，请稍后</h2> :
                    err ? <h2 style={{color:"red"}}>{err}</h2> :
                    users.map((user) => {
                        return (
                            <div key={user.id} className="card">
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
