import express from "express";
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import schemas from './schemas/index.js';
const { resolvers, typeDefs } = schemas
import auth from './utils/auth.js';
const { authMiddleware } = auth;
import db from './config/connection.js';

const PORT = process.env.PORT || 3001;
const app = express();
let server = null;
async function startServer() {
    server = new ApolloServer({
        resolvers,
        typeDefs,
        context: authMiddleware,
    });
    await server.start()
    await server.applyMiddleware({ app });
}
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
