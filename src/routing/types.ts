/**
 * Types
 */

export interface ProductDetailScreenParams {
  id: string;
  createdAt: string;
  product: string;
  points: number;
  is_redemption: boolean;
  image: string;
  from_account_id?: number;
  to_account_id?: number;
  amount?: number;
  verification_code?: string;
  reason?: string;
  query?: string;
  variables?: object | null;
  operationName?: string | null;
}

export type StackParamList = {
  Home: undefined;
  ProductDetail: ProductDetailScreenParams;
};
