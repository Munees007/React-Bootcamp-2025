import { useEffect, useState } from "react";

export default function useLocalStorage({key,init}) 
{
    const [data,setData] = useState(()=>{
        const saved = localStorage.getItem(key) ?? init
        return saved
    })
    useEffect(()=>{
        localStorage.setItem(key,data)
    },[data])

    return [data,setData]
}