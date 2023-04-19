import axios from 'axios';
import { ProductDetailScreenParams } from '@routing/types';

export const ProductService = () => {
  async function getProducts(): Promise<ProductDetailScreenParams[]> {
    const response = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
    return response.data;
  }

  return {
    getProducts,
  };
};
