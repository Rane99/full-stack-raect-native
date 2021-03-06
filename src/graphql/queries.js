import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
          node {
            fullName
            ownerAvatarUrl
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
          }
        }
      }
  }
`;


export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
        id
        username
        createdAt
    }
  }

`;