import { getInitialProducts, getProduct } from "@/lib/data";
import ProductList from "../components/ProductList";
import LoadMoreProductList from "../components/LoadMoreProductList";

export default async function Search({ searchParams }) {

  const { q } = await searchParams;
  
  const { results: products, next} = await getInitialProducts(q);
  console.log(q);

  return (
    <div>
      <div>검색어: {q}</div>
      <ProductList products={products} />
    </div>

  );
}
