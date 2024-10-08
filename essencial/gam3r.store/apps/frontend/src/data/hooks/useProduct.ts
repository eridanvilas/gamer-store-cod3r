'use client'
import { Product } from "@gstore/core";
import { useCallback, useEffect, useState } from "react";

const urlBase = 'http://localhost:4000/api'

export default function useProduct(){

    const [products, setProducts] = useState<Product[]>([])

    async function getAllProduct(): Promise<Product[]>{
        const resp = await fetch(`${urlBase}/product`)
        const products = await resp.json()
        return products ?? [];
    }

    const getById = useCallback(async function getById(id: number): Promise<Product | null>{
        const resp = await fetch(`${urlBase}/product/${id}`)
        const product = await resp.json()
        return product ?? null;
    }, [])

    useEffect(() =>{
        getAllProduct().then(setProducts)
    }, []
    )

    return {
        products,
        getById,
    }
}