import React, {Component} from 'react';
import qs from 'qs'

const DetailData = [
    {id: 1, content: "你好"},
    {id: 2, content: "你好"},
    {id: 3, content: "你好"}
]

class Detail extends Component {
    render() {
        console.log(this.props)
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1));
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