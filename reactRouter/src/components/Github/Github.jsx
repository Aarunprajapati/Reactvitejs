import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Aarunprajapati')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    }
    ,[])
  return (
    <>
   
        <div className=' text-center bg-gray-300 text-3xl py-4'><p>Github : {data.followers} </p>
        <img  className="px-2" src={data.avatar_url} alt="gitpicture"  width={300}/>

    </div>
    
    
    
    </>
  )
}

export default Github


