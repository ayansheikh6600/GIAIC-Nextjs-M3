"use client"
import { Card } from '@/shared';
import { ProductCard } from '@/shared/ProductCard';
import axios from 'axios';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SingleProduct = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Last part of the path ko extract karne ke liye
  const [product, Setproduct] =  useState<ProductCard>()

  // console.log(id, "Product ID");

  // console.log(id, "Product ID");

  useEffect(()=>{

(async()=>{

  const res = await axios.get(`/api/products?id=${id}`)
  // console.log(res.data.data);
  
  Setproduct(res?.data?.data)

})()

  },[])
  
  return (
    <div>
      
      {product ?<Card {...product}/> :"nothing"}
      
       </div>
  )
}

export default SingleProduct