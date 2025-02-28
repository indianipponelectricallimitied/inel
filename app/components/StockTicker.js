"use client"

import React, { useEffect } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const key = "4t7Pkq7hERp0zBSu4MDOsa4kBLxB5v8x";
const symbol = "INDNIPPON";

const options = {
    hostname: 'financialmodelingprep.com',
    port: 443,
    path: `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${key}`,
    method: 'GET'
}

export default function StockTicker() {
    return (
        <div className='flex items-center gap-2'>
           <p className="flex items-center gap-2"> <MdArrowUpward  className='text-green-500'/> NSE: 532540</p>
           <p className="flex items-center gap-2"> <MdArrowDownward className='text-red-500'/> BSE: 532540</p>
        </div>
    )
}
