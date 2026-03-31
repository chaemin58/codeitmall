import Button from "@/components/Button";
import ProductInfo from "./components/ProductInfo";

export default async function Product({ params }) {

  const { id } = await params;

  return (
    <div>
      <ProductInfo />
      <Button>구매하기</Button>
      <div>상품 id: {id}</div>
    </div>
  );
}