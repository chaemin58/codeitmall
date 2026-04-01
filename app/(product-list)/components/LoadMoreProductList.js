'use client';

import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function LoadMoreProductList({
  initialProducts = [],
  initialNext = null
}){
  const [products, setProducts] = useState(initialProducts);
  const [next, setNext] = useState(initialNext);

  //클릭하면 다음 데이터를 불러오는 함수
  const handleLoadMore = () => {
    
  }
  return(
    <div>
      <ProductList products={products} />
      {next && (
        <button style={{marginTop: '20px'}} onClick ={handleLoadMore}>
        상품 더 보기
        </button>
      )}
    </div>
  )
}