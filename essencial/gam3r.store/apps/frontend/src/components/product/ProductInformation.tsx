import { Product } from '@gstore/core'
import Image from 'next/image'
import Specifications from './Specifications'

export interface ProductInformationProps {
    product: Product
}

export default function ProductInformation(props: ProductInformationProps) {
    const { product } = props
    return (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={product.imagem!}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do Produto"
                />
            </div>
            <Specifications product={product} />
        </div>
    )
}
