import { getProducts } from "@/lib/data";
import ProductList from "./components/ProductList";

export default async function Home() {
  const { results } = await getProducts();

  return (
    <div>
      <h1>홈페이지</h1>
      <ProductList products={results}/>
    </div>
  );
}
