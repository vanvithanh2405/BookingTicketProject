import _ from 'lodash';
import React from 'react'

export default function FlattenLodash() {
    
    const arr = [[1,[2,[3,[4]]],5]];

    const result = _.flatten(arr); //hàm dùng để phân tách các mảng trong mảng một cách 

    const resultFlattenDeep = _.flattenDeep(arr); //hàm dùng để phân tách các mảng trong mảng nhiều cách 

    console.log('resultFlatten',result);
    console.log('resultFlattenDeep',resultFlattenDeep);
    
    
    
    return (
        <div>
            
        </div>
    )
}
