import _ from 'lodash'
import React from 'react'

export default function FillLodash() {
    
    const arrProduct = [
        {id:'1',name:'Iphone'},
        {id:'2',name:'Iphone XS max'},
        {id:'3',name:'Iphone XS'}
    ]
    
    _.fill(arrProduct,{id:5,name:'Samsung'},1,2) // hàm dùng để thay đổi giá trị trong mảng ._fill(tên mảng,{properties},start,end-1);
    console.log('arrProduct',arrProduct)



    return (
        <div>
            
        </div>
    )
}
