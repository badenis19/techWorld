const graphql = require('graphql');
const Product = require('../models/product');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat
} = graphql;


const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    img_url: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id)
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        img_url: { type: GraphQLString }
      },
      resolve(parents, args) {
        let product = new Product({
          name: args.name,
          price: args.price,
          img_url: args.img_url
        })
        return product.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

// Mutation ex:
// mutation {
//     addProduct(name: "Mouse", price: 9, img_url: "https://images.unsplash.com/flagged/photo-1561023367-4431103a484f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"){
//       name
//     }
//   }
  

// Query ex :
//   {
//     products {
//       name
//       img_url
//       price
//     }
//   }
  