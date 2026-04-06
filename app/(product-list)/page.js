import { getInitialProducts } from "@/lib/data";
import FeaturedBanner from "./components/FeaturedBanner";
import { Suspense } from "react";
import ProductListSkeleton from "./components/ProductListSkeleton";
import ProductResults from "./components/ProductResults";

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
