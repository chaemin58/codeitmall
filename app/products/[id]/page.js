import ProductInfo from './components/ProductInfo';
import SizeReviewList from './components/SizeReviewList';
import { getProduct, getSizeReviews } from '@/lib/data';
import styles from './page.module.css';
import SizeReviewForm from './components/SizeReviewForm';
import { get } from '@/lib/fetch';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const { results } = await get('/products?linmit=100');
  return results.map((product)=> ({ id: product.id.toString() }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: '상품을 찾을 수 없습니다',
      description: '요청하신 상품을 찾을 수 없습니다.',
    };
  }

  return {
    title: product.name,
    description: `${product.name} 상품 정보와 사이즈 추천을 확인해보세요. 실제 구매자들의 리뷰와 사이즈 추천을 통해 완벽한 핏을 찾을 수 있습니다.`,
  };
}

export default async function Product({ params }) {
  const { id } = await params;
  const [product, { results: sizeReviews }] = await Promise.all([
    getProduct(id),
    getSizeReviews(id),
  ]);

  if (!product){
    notFound();
  }

  return (
    <>
      <h1 className={styles.name}>
        {product.name}
        <span className={styles.englishName}>{product.englishName}</span>
      </h1>
      <div className={styles.content}>
        <Image
          width={450}
          height={500}
          src={product.imgUrl}
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.info}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>제품 정보</h2>
            <ProductInfo product={product} />
          </section>
          {sizeReviews?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>사이즈 추천</h2>
              <SizeReviewList sizeReviews={sizeReviews} />
            </section>
          )}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
            <SizeReviewForm product={product} />
          </section>
        </div>
      </div>
    </>
  );
}