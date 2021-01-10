import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (//itrando os produtos e para cada produto
          //iterado ira ter um produto
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;