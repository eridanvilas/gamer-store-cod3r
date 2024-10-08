
import Priced from "./Priced"
import Specifications from "./Specifications"

export default interface Product extends Priced{
    id: number
    name: string
    description: string
    brand: string
    model: string
    imagem: string
    videoReview: string
    assessment: number
    tags: string[]
    specifications: Specifications
}