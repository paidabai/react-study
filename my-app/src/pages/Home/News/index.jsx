import React, {Component} from 'react';

class News extends Component {
    //点击News组件后2秒跳转到Message组件
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/home/Message")
        },2000)
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default News;