'use client';

import { useEffect, useState } from 'react';
import styles from './SearchForm.module.css';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchForm(){
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname= usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    //검색어로 이동
    if (query){
      router.push(`/search?q=${query}`);
    }
  }
  //경로가 바뀔 때 state초기화
  useEffect(() =>{
    //홈페이지에 있으면 검색바 빈 문자열 유지
    if (pathname==='/'){
      setQuery('');
    }
  },[pathname])

  return(
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name ="q"
        type="text"
        placeholder="찾고 싶은 상품을 검색해보세요"
        className={styles.input}
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
      />
      <button type="submit" className={styles.button}>검색</button>
    </form>
  );
}