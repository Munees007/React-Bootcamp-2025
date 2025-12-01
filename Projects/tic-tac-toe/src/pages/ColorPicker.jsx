import React, { useState } from 'react'

export const ColorPicker = () => {
    const colors = ["#c1121f","#fb8500","#386641","#22223b"]
    const [color,setColor] = useState("#c1121f")
    return (
        <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:color}}>
            <div className='flex gap-5'>
                {
                    colors.map((c,i)=>{
                       return <button onClick={()=>{
                        setColor(c)
                       }} key={i} value={c} className='w-32 border-white border-2 h-10 rounded-md cursor-pointer hover:scale-105 active:scale-95' style={{backgroundColor:c}} >
                            
                        </button>
                    })
                }
            </div>
        </div>
    )
}
