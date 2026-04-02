'use server';

import { revalidatePath } from 'next/cache';
import { post } from './fetch';

export async function submitSizeReview(formData) {
  const data = Object.fromEntries(formData.entries());
  const sizeReview = {
    ...data,
    height: Number(data.height),
    productId: Number(data.productId),
  };

  await post('/size_reviews', sizeReview);
  revalidatePath(`/products/${sizeReview.productId}`);
}