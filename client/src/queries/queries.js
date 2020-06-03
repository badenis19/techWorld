import { gql } from 'apollo-boost';

/* Queries */

// Get all
const getProductsQuery = gql`
  {
    products {
      id
      name
      price
      img_url
    }
  }
`;

// Get one
// const getProductQuery = gql`
//   {
//     product($id: ID){
//       name
//       price
//       img_url
//     }
//   }
// `;

export { getProductsQuery }