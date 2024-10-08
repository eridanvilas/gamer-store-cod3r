'use client'

import ProductItem from "@/components/product/ProductItem";
import useProduct from "@/data/hooks/useProduct";

export default function Home() {
  const { products } = useProduct()
  return (
   <div className="grid grid-cols-4 gap-5 container">
    {products.map((item) => (
        <ProductItem key={item.id} product={item}/>
    ))}
   </div>
  );
}
