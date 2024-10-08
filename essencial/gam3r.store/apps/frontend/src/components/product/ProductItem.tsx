"use client";

import { Product } from "@gstore/core";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/20 rounded-xl relative max-w-[380px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={product.imagem}
          fill
          alt="Imagem do produto"
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/20">
        <span className="text-lg font-semibold">{product.name}</span>
        <span className="text-sm border-b border-dashed self-start">
          {product.specifications.highlight}
        </span>
        <div className="fkex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {product.basePrice}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {product.promotionalPrice}
          </span>
        </div>
        <button
          className="flex justify-center items-center h-8 gap-2 bg-violet-700 hover:border-2 border-emerald-500 rounded-full"
          onClick={(e: any) => {
            e.preventDefault();
            console.log("Adicionar ao carrinho");
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span> Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
