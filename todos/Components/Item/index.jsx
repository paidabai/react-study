import React, { Component } from "react";
import './index.css'

export default class Item extends Component {

    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handledelete = (id) => { 
        return () => {
            if(window.confirm("确定要删除吗")){
                this.props.deleteTodo(id)
            }
        }
     }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handledelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}