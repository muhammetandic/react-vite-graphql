import { gql } from '@apollo/client';

export const QUERY_GET_COUNTRIES = gql`
query Countries {
  countries{
    code
    name
  }
}
`;
