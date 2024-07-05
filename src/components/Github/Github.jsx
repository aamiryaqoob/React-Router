import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aamiryaqoob')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center bg-gray-500 p-4 text-3xl text-white' >Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Github Picture" width={150} height={200} className='rounded' /></div>
    )
}

export default Github

//Optimized method using loader

export const GithubInfo = async () => {
    const res = await fetch('https://api.github.com/users/aamiryaqoob')
    return res.json()
}