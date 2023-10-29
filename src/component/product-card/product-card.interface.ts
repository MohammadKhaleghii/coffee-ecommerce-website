export interface ProductCardProps {
  ProductDetails: ProductDetails;
}
export interface ProductDetails {
  productTitle: string;
  productImage: string;
  productPrice: number;
  productCombination: ProductCombination;
}

interface ProductCombination{
    item1: string
    item2: string
}