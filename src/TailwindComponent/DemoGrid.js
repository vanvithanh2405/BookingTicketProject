import React from 'react'

export default function DemoGrid() {
    return (
        <div className="container">
            <div className="grid grid-cols-5 gap-10 text-center "> 
                <div className="bg-red-500">1</div>
                <div className="bg-yellow-500">2</div>
                <div className="bg-blue-500">3</div>
                <div className="bg-green-500">4</div>
                <div className="bg-purple-500">5</div>
            </div>
        </div>
    )
}
