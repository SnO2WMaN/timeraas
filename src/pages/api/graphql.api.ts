import {server} from '~/apollo/server';

export const config = {api: {bodyParser: false}};
export default server.createHandler({path: '/api/graphql'});
