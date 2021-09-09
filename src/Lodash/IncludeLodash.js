import _ from 'lodash';
import React from 'react'

export default function IncludeLodash() {
    
    const arr = {id:1,name:'Văn Vĩ Thành',age:18};

    const result = _.includes(arr,'Văn Vĩ Thành'); 
    
    console.log('Kết quả', result )
    
    
    return (
        <div>
            
        </div>
    )
}
