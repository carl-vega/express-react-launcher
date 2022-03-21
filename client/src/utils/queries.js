import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      messages {
        _id
        body
        sentAt
        reply
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
{
  projects {
    _id
    title
    description
    repository
    live
    image
    pinned
  }
}`;