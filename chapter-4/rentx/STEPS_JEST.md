## Jest

### 1. Install jest and ts-jest
```
yarn add jest @types/jest ts-jest -D
```

### 2. Init
```
yarn jest --init
```

### 3. Enable in jest.config.ts
```js
{
    import { pathsToModuleNameMapper } from 'ts-jest/utils';
    import { compilerOptions } from './tsconfig.json';

    bail: true,
    preset: 'ts-jest',
    testMatch: ['**/*.spec.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src',
    }),
}
```

### 4. Run tests
```bash
yarn test
```