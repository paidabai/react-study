import React, {Component} from 'react';


const DetailData = [
    {id: 1, content: "你好"},
    {id: 2, content: "你好"},
    {id: 3, content: "你好"}
]

class Detail extends Component {
    render() {
        console.log(this.props)
        //解决清理缓存报错，获取不到数据时用空对象代替
        const {id, title} = this.props.location.state || {}
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id == id
        })
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{findResult.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;