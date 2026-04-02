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


  // 디버깅
  console.log('전송 직전 데이터:', sizeReview); // 1. 데이터 모양 확인
  
  try {
    const response = await post('/size_reviews', sizeReview);

    // 리스폰스가 이상함
    console.log('서버 응답 결과:', response); // 2. 서버가 뭐라고 하는지 확인
    console.log(response.sex)
  } catch (error) {
    console.error('포스트 실패 원인:', error);
  }

  revalidatePath(`/products/${sizeReview.productId}`);
}