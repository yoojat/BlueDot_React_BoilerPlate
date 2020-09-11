/**
 * 해당 파일은 GrapQL 서버와 통신하기 위한 환경 설정으로 Github 오픈 소스 프로젝트인
 * Apollo Client(React)를 사용합니다.
 * @see https://www.apollographql.com/docs/react/v2.6
 */

import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';

// Apollo Client 인메모리 캐시
const cache = new InMemoryCache();

// HTTP 프로토콜을 기반으로 GraphQL 서버에 GraphQL 쿼리 요청을 하기 위해 사용됩니다.
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_GRAPHQL_ENDPOINT,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
});

export default client;
