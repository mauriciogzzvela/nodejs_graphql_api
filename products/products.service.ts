const productSample = require("./products.sample");

export class ProductsService {
    public products: any = [];

    configTypeDefs(){
        let typeDefs = `
            type Product{
                id: Int,
                name: String,
                description: String,
                price: Int
            }`;

        typeDefs += `
            extend type Query{
                products: [Product]
            }`;

        typeDefs += `
            extend type Mutation{
                product(id: Int, name: String, description: String, price: Int): Product!
            }`;

        return typeDefs;
    }

    configResolvers(resolvers: any){

        resolvers.Query.products = () => {
            return this.products;
        };
        
        resolvers.Mutation.product = (_:any, product: any) => {
            this.products.push(product);
            return product;
        };
    }

}


