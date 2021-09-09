import _ from 'lodash'
import React from 'react'

export default function SortLodash() {

    const users = [
        { name: 'Tommy', age: 20 },
        { name: 'Vicky', age: 22 },
        { name: 'Long', age: 21 },
        { name: 'Teddy', age: 19 },
        { name: 'Bob', age: 50 },
        { name: 'Kevin', age: 30 },
    ]

    const resultSortAge = _.sortBy(users, [item => item.age]);
    
    console.log('result',resultSortAge);

    const result = _.sortBy(users,['name','age'])

    console.log('result',result)

    return (
        <div>

        </div>
    )
}
