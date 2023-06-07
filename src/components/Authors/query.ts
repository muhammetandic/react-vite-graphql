import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query authors {
    authors {
      _id
      firstName
      lastName
      posts {
        _id
        title
        content
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation CreateAuthor($author: AuthorData!) {
    createAuthor(author: $author) {
      success
    }
  }
`;

export const REMOVE_AUTHOR = gql`
  mutation RemoveAuthor($id: String!) {
    deleteAuthor(id: $id) {
      success
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($author: AuthorData!) {
    updateAuthor(author: $author) {
      success
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      _id
      title
      content
    }
  }
`;
