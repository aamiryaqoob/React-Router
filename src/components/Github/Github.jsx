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
            <div className='flex justify-center mt-4'>
                <img src={data.avatar_url} alt="Github Picture" width={250} height={250} className='rounded' />
            </div>
        </div>
    )
}

export default Github

//Optimized method using loader

export const GithubInfo = async () => {
    const res = await fetch('https://api.github.com/users/aamiryaqoob')
    return res.json()
}