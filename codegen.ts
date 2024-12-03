import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'graphql/schemas',
  documents: 'graphql/documents',
  generates: {
    'graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        skipTypename: true,
        enumsAsConst: true,
        avoidOptionals: true,
        defaultScalarType: 'unknown',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
