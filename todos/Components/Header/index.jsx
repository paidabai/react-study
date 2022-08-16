import React, { Component } from "react";
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodos: PropTypes.func.isRequired
    } 

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value == '') return alert("请输入内容")
        const newTodos = { id: nanoid(), name: target.value, done: false }
        this.props.addTodos(newTodos)
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp}  type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}