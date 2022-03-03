import { AuthenticationError } from 'apollo-server-express';
import models from '../models/index.js';
const { User, Message, Project } = models;
import auth from '../utils/auth.js';
const { signToken } = auth;
export default {
    Query: {
        // me: User
        me: async (parent, args, context) => {
            if (context.user) return await User.findOne({ _id: context.user._id }).select("-__v -password").populate("messages");
            throw new AuthenticationError('Not logged in');
        },
        // projects: [Project]
        projects: async (parent, args, context) => {
            const projects = await Project.find({});
            if (projects) return projects
            throw new Error('No projects coild be found');
        },
    },

    Mutation: {
        // addUser(username: String!, email: String!, password: String!): Auth
        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user);
            return { token, user };
        },
        // login(email: String!, password: String!): Auth
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) throw new AuthenticationError('Incorrect credentials');

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) throw new AuthenticationError('Incorrect credentials');

            const token = signToken(user);
            return { token, user };
        },
        // addMessage(body: String!) Auth
        addMessage: async (parent, { body }, context) => {
            const message = (context.user) ? await Message.create(body) : null;
            const user = (message) ? await User.findOneAndUpdate({ _id: context.user._id }, { $push: { messages: message._id } }) : null;
            const token = signToken(user);
            if (!token) throw new AuthenticationError('You need to be logged in!');
            return { token, user }
        },
        // addProject(projectData: ProjectInput!): [Project]
        addProject: async (parent, { projectData }) => {
            console.log(projectData);
            const project = await Project.create(projectData);
            console.log(project);
            if (project) return await Project.find({});
            throw new Error('Could not add project');
        },
        // removeProject(projectId: ID!): [Project]
        removeProject: async (parent, { projectId }) => {
            const project = await Project.findByIdAndRemove(projectId)
            if (project) return await Project.find({});
            throw new Error('Could not remove project');
        },
    },
};


