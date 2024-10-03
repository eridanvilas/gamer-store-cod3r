
import ProductItem from "@/components/product/ProductItem";
import { products} from "@/core";

export default function Home() {
  return (
   <div className="grid grid-cols-4 gap-5 container">
    {products.map((item) => (
        <ProductItem key={item.id} product={item}/>
    ))}
   </div>
  );
}
