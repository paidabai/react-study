import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { students } = this.props
        return (
            <div>
                <table>
                    <tr>
                        {students.map((student) => {
                            <td key={student.id}>{student.name}</td>
                        })}
                    </tr>
                </table>
            </div>
        )
    }
}
