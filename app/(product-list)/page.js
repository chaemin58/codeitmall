import { get } from "@/lib/fetch";
import ProductList from "./components/ProductList";

export default async function Home() {
  const { results } = await get('/products');

  return (
    <div>
      <h1>홈페이지</h1>
      <ProductList products={results}/>
    </div>
  );
}
