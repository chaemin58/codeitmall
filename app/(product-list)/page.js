import FeaturedBanner from "./components/FeaturedBanner";
import { Suspense } from "react";
import ProductListSkeleton from "./components/ProductListSkeleton";
import ProductResults from "./components/ProductResults";

export const metadata = {
  title: '홈',
}

export default async function Home() {
  return (
    <div>
      <FeaturedBanner />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductResults />
      </Suspense>
    </div>
  );
}
