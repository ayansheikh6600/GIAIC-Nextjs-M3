"use client"
import { Card } from '@/shared'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [test, setTest]= useState<any>()

    useEffect(()=>{

        (async ()=>{

            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data);
            setTest(res.data)
            
        })()


    }, [])


  return (
    <div>page


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {
                test?.map((item:any, index:any)=>{
                    return <div key={index} className='flex justify-center items-center '><Card {...item}/></div>
                })
            }
        </div>
    </div>
  )
}

export default page