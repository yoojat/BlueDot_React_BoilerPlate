이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 사용합니다.

## 스크립트 명령어

프로젝트 디렉토리에서 실행할 수 있는 명령어는 다음과 같습니다.

### `yarn start`

개발 모드로 애플케이션을 실행합니다.<br />
실행된 애플리케이션을 확인하기 위해 브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하세요.

코드가 변경되면 페이지는 자동으로 리로드됩니다.<br />

Lint 에러는 콘솔에서 확인하실 수 있습니다.

### `yarn codegen`

기본적으로 GraphQL 스키마로부터 TypeScript 타이핑 파일을 생성합니다.
GraphQL Code Generator 환경설정(codegen.yml)에 따라 React Apollo 컴포넌트, HOC, hook 또는 resolver 등 필요한 코드를 생성할 수 있습니다.

더 많은 정보를 확인하기 위해서는 다음 사이트를 참고하세요. [GraphQL Code Generator](https://graphql-code-generator.com).

### `yarn prettier`

prettier 환경설정(.prettierrc 파일)에 따라 프로젝트 내 모든 파일에 코드 포맷 규칙을 적용합니다.

더 많은 정보를 확인하기 위해서는 다음 사이트를 참고하세요. [prettier](https://prettier.io).

### `yarn lint`

eslint 환경설정(.eslintrc 파일)에 따라 프로젝트 내 모든 파일에 Lint 규칙을 적용합니다.

더 많은 정보를 확인하기 위해서는 다음 사이트를 참고하세요. [eslint](https://eslint.org).

### `yarn build`

`build` 디렉토리에 프로덕션 코드를 빌드합니다.<br />
빌드를 실행하면 리액트는 프로덕션 모드로 빌드를 수행하고 성능 향상을 위해 빌드 파일을 최적화합니다.

더 많은 정보를 확인하기 위해서는 다음 사이트를 참고하세요. [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## Reference

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React documentation](https://reactjs.org/).
