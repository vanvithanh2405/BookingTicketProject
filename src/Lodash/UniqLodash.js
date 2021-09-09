import _ from 'lodash'
import React from 'react'

export default function UniqLodash() {
    
    const arr = [1,2,2,2,2,4,5,6]
    console.log('result',_.uniq(arr));

    const array = [
        {id:'1', name:'Iphone X', price:1000},
        {id:'2', name:'Iphone Xs', price:2000},
        {id:'1', name:'Iphone X', price:1000},
        {id:'1', name:'Iphone X', price:1000},
        {id:'3', name:'Iphone XsMax', price:3000},
        {id:'3', name:'Iphone XsMax', price:3000},
        {id:'1', name:'Iphone X', price:1000},
        {id:'2', name:'Iphone Xs', price:2000},
    ]
    console.log('result',_.uniqBy(array,'price'))
    
    return (
        <div>
            
        </div>
    )
}
