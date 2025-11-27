export async function single_kural(num)
{
    try{
        const res = await fetch(`${import.meta.env.VITE_APP_THIRUKURAL_API_URL}/api/kural_single`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({num:num}),
    
        })
        const data = await res.json();
        return data.data
        
    }
    catch(e)
    {
        console.log(e)
        return null
    }
}