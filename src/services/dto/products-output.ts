export interface CreateProductsOutput {
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
