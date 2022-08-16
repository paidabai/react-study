import React, { Component } from "react";
import List from "./Components/List";
import axios from "axios"

export default class App extends Component {

    getStudentData = () => {
        axios.get("http://localhost:3000/api/students").then(
            response => { console.log("成功", response.data); },
            error => { console.log("失败", error); }
        )
    }
    render() {
        const {students} = this.state 
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生数据</button>
                <List students={students} />
            </div>
        )
    }
}