import {gql} from '@apollo/client';

const OrderCardUpdate = gql`
  mutation UpdateOrderCardProduct($productId: ID!, $count: Boolean!) {
    orderCardUpdate(productId: $productId, orderInput: {count: $count}) {
      userErrors {
        message
      }
      product {
        productName
        _id
      }
      orderCount
    }
  }
`;

export {OrderCardUpdate};
