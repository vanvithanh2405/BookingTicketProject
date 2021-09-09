import React from 'react'
import Card from './Card'

export default function BTLayoutTailwind() {
    return (
        <div className="container">
            <h1 className="text-center text-4xl text-green-500 font-semibold">Welcome to the cybersoft frontend with tailwind css</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="text-center">
                    <Card />
                </div>
                <div className="text-center">
                    <Card />
                </div>
                <div className="text-center">
                    <Card />
                </div>
            </div>
        </div>
    )
}
