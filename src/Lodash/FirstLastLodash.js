import React from 'react';
import _ from 'lodash';



export default function FirstLastLodash() {
    
    const arrStudent = [
        {id:1,name:'Thành'},
        {id:2,name:'Văn'},
        {id:3,name:'Vĩ'},
    ]
    
    
    const firstItem = _.first(arrStudent); //Tìm giá trị đầu tiên trong mảng
    const lastItem = _.last(arrStudent); // Tìm giá trị cuối cùng trong mảng
    
    const arr = [['001','Alice'],['002','Bob'],['003','Jennie']]

    const [id,name] = _.first(arr);
    const [id2,name2] = _.last(arr);
    return (
        <div className="container">
            <div>First Item: {firstItem.name}</div>
            <div>Last Item: {lastItem.name}</div>
            <hr />
            <div>FirstItem: {id} - {name}</div>
            <div>LastItem: {id2} - {name2}</div>
        </div>
    )
}
