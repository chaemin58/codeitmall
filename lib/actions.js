'use server';

import { revalidatePath } from 'next/cache';
import { post } from './fetch';

export async function submitSizeReview(currenState, formData) {
  const data = Object.fromEntries(formData.entries());
  const sizeReview = {
    ...data,
    height: Number(data.height),
    productId: Number(data.productId),
  };

  try{
    await post('/size_reviews', sizeReview);
    revalidatePath(`/products/${sizeReview.productId}`);
    return {error: null}
  } catch(err){
    {error: '리뷰 작성 중 오류가 발생했습니다.'}
  } 
}