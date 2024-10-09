"use client";

import { Product } from "@gstore/core";
import useProduct from "@/data/hooks/useProduct";
import { useEffect, useState } from "react";
import TitleProduct from "@/components/product/TitleProduto";
import ProductInformation from "@/components/product/ProductInformation";
import BannerCompra from "@/components/product/BannerCompra";
import PriceMeter from "@/components/product/priceMeter";
import UserRating from "@/components/product/UserRating";
import SpecializedAssessment from "@/components/product/SpecializedAssessment";
import ProductNotFound from "@/components/product/ProductNotFound";


export default function PageProduct(props: any) {
  const { getById } = useProduct();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getById(+props.params.id).then(setProduct);
  }, [props.params.id, getById]);

  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <TitleProduct product={product}></TitleProduct>
        <ProductInformation product={product}></ProductInformation>
        <BannerCompra product={product}></BannerCompra>
        <PriceMeter product={product}></PriceMeter>
      </div>

      <UserRating product={product}/>
      <SpecializedAssessment product={product}/>
    </div>
  ) :
    <ProductNotFound/>

}
