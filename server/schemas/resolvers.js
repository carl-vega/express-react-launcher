import { AuthenticationError } from 'apollo-server-express';
import { User, Message, Project } from '../models';
import { signToken } from '../utils/auth';

export default resolvers = {
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
            if (context.user) const message = await Message.create({ body });
            if (message) const user = await User.findOneAndUpdate({ _id: context.user._id },)
            throw new AuthenticationError('You need to be logged in!');
        },
        // addProject(projectData: ProjectInput!): [Project]
        addProject: async (parent, { projectData }) => {
            const project = await Project.create({ projectData });
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


