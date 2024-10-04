"use client";

import { Product } from "@/core";
import useProduct from "@/data/hooks/useProduct";
import { useEffect, useState } from "react";


export default function PageProduct(props: any) {
  const { getById } = useProduct();
  const [ product, setProduct ] = useState<Product | null>(null);

  useEffect(() => {
    getById(+props.params.id).then(setProduct);
  }, [props.params.id, getById]);

  return product ? (
    <div>{product?.name}</div>
  ) : (
    <div>Produto não encontrado</div>
  );
}
