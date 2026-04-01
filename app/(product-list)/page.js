import { getInitialProducts } from "@/lib/data";
import ProductList from "./components/ProductList";
import LoadMoreProductList from "./components/LoadMoreProductList";

export default async function Home() {
  const { results:products, next } = await getInitialProducts();

  return (
    <div>
      <LoadMoreProductList initialProducts={products} initialNext={next}/>
    </div>
  );
}
