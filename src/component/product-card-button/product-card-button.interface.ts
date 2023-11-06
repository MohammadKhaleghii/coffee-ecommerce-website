export interface ProductCardButtonProps {
  product: ProductDetails;
}

interface ProductDetails {
  imagePath: string;
  productTitle: string;
  productBrand: string;
  productID: number;
  productPrice: number;
  productCombination: ProductCombination;
}
interface ProductCombination {
  item1: string;
  item2: string;
}
