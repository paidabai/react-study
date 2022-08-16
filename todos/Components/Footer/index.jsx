import React, { Component } from "react";
import './index.css'

export default class Footer extends Component {

    handleAllChecked = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAlldone = () => {
        if(window.confirm("确定删除吗？")){
            this.props.clearTodoDone()
        }
    }

    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done == true ? 1 : 0)
        }, 0)
        const allTodo = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleAllChecked} checked={doneCount === allTodo && allTodo !== 0 ? true : false} type="checkbox" />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{allTodo}
                </span>
                <button onClick={this.handleClearAlldone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}