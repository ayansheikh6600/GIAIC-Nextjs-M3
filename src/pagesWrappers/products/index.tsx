"use client"
import { Card } from '@/shared'
import { ProductCard } from '@/shared/ProductCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [test, setTest]= useState([])

    useEffect(()=>{

        (async ()=>{

            const res = await axios.get("/api/products")
            // console.log(res.data.data);
            setTest(res?.data?.data)
            
        })()


    }, [])


  return (
    <div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {
                test?.map((item:ProductCard, index:number)=>{
                    return <div key={index} className='flex justify-center items-center '><Card {...item}/></div>
                })
            }
        </div>
    </div>
  )
}

export default Products