export const PRODUCT_QUERY = `
query{
  products{
    data{
      attributes{
        title
        description
        price
        slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!){
    products(filters: {slug: {eq: $slug}}){
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
