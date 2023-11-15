import {gql} from '@apollo/client';

const GET_ORDER_CARD = gql`
  query getOrderCard {
    getOrderCard {
      amount
      piece
      product {
        orderCount
        _id
        product {
          _id
          price
          productName
          user {
            name
          }
          productName
          price
        }
      }
    }
  }
`;

export {GET_ORDER_CARD};
