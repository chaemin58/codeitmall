import styles from './page.module.css';
import { Suspense } from "react";
import ProductResults from "../components/ProductResults";

export default async function Search({ searchParams }) {

  const { q } = await searchParams; 

  return (
    <div>
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
        <ProductResults q={q}/>
    </div>
  );
}
