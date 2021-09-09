import React from 'react'
import _ from 'lodash'



export default function ChunkLodash() {

    const arr = ['id', 1, 'name', 'Thành', 'info', 'UIT']
    const result = _.chunk(arr, 2); // Hàm này dùng để set ma trận cho một bài toán ._chunk(tên mảng,số phần tử);
    console.log('result', result);

    const array = ['a01', 'a02', 'a03', 'a04', 'a05', 'a06', 'a07', 'a08', 'a09', 'a10', 'a11', 'a12']
    const result2 = _.chunk(array, 3);
    console.log('result', result2);

    return (
        <div>

        </div>
    )
}
