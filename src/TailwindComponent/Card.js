import React from 'react'

export default function Card() {
    return (
        <div className="card w-full">
            <div className="card-body py-8 bg-gray-200 rounded-tl-lg rounded-tr-lg px-7">
                <h3 className="text-center text-purple-800 font-semibold text-xs">Category</h3>
                <p className="text-xl font-semibold">Cybersoft frontend developer</p>
                <p className="text-center font-thin my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloremque dignissimos iusto atque recusandae vitae ipsum. Soluta unde cumque reprehenderit fugiat, dolore dicta amet perferendis expedita officia dignissimos dolorem minus.
                </p>
            </div>
            <div className="card-footer rounded-bl-lg rounded-br-lf  justify-between flex bg-gray-100">
                <p className="mt-2">1 USD</p>
                <button className="rounded-lg bg-purple-400 py-2 px-2  transition hover:text-purple-500 hover:bg-gray-300 duration-300">Register</button>
            </div>
        </div>
    )
}
