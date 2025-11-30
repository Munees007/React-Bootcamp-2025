import React from 'react'
import {motion} from "framer-motion"
export const Cell = ({value,index,handleClick}) => {
    return (
        <motion.div 
            whileHover={{
                scale:1.1,
                backgroundColor:"#f4a261",
                transition:{
                    ease:"easeInOut"
                }
            }}
            whileTap={{
                scale:1.3,
                transition:{
                    ease:"easeInOut"
                }
            }}

            onClick={()=>{
                if(value=="")
                {
                    handleClick(index,value)
                }
                
            }}
        className='w-24 h-24 flex justify-center items-center text-6xl font-bold cursor-pointer bg-[#e76f51] rounded-md border-2 border-black'>
            <p>{value}</p>
        </motion.div>
    )
}
