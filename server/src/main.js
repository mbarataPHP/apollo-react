import { ApolloServer,  makeExecutableSchema } from 'apollo-server';
import crudUser from './Object/user/service/crud';

import resolvers from "./resolvers";
import typeDefs from "./main.graphql";


let schema = makeExecutableSchema({typeDefs, resolvers:resolvers});
let server = new ApolloServer({
    schema,
    context:({ req }) => {
        const token = req.headers.authorization || '';

        return {
            user:crudUser.getUserByToken(token)
        }


    }
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});