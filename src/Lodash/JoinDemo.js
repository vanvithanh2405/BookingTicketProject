import _ from 'lodash';
import React from 'react'

export default function JoinDemo() {

    let arr = ['Văn', 'Vĩ', 'Thành'];
    let arrPerson = [
        { id: 1, name: 'Thành' },
        { id: 2, name: 'Vĩ' },
    ]
    
    //es6
    const result = arr.join('-') // thêm phần tử vào object

    // Lodash
    const resultLodash = _.join(arr, '*');

    const person = _.find(arrPerson, item => item.id === 2)

    return (
        <div>
            <p>Name: {person.name}  - id: {person.id}</p>
        </div>
    )
}
