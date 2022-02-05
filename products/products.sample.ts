import { Product } from "./products.model";

const products: Array<Product> = [];

products.push(new Product(1, "Amazing Graphql Product", "product one descriptopm", 100));
products.push(new Product(2, "Amazing second graphql product", "second product description", 250));

exports.productSample = products;

