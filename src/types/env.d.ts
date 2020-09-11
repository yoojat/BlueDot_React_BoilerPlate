export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVER_URL: string;
      REACT_APP_SERVER_GRAPHQL_ENDPOINT: string;
    }
  }
}
