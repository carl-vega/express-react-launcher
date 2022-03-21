import { gql } from 'apollo-server-express';

export default gql`
  type User {
    _id: ID!
    username: String!
    email: String
    messages: [Message]
  }

  type Message {
    _id: ID!
    body: String
    sentAt: String
    reply: String
  }
  type Project {
    _id: ID!
    title: String
    description: [String]
    repository: String
    live: String
    image: String
    pinned: Boolean
  }
  
  input ProjectInput {
    title: String
    description: [String]
    repository: String
    live: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    me: User
    projects: [Project]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(body: String!): Auth
    addReply(messageId: ID!, reply: String): Message
    addProject(projectData: ProjectInput!): [Project]
    removeProject(projectId: ID!): [Project]
  }
`;


