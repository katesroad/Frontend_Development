# Jest takeaways

- toBeCalled() vs toBeCalledTimes

```ts
expect(func).toBeCalled();
expect(func).toBeCalledTimes(1);
```

can be improved as 


```ts
expect(func).toBeCalledTimes(1);
```

- [Mock return value case by cases](https://stackoverflow.com/questions/45006254/how-to-change-the-behaviour-of-a-mocked-import)

```ts
jest.mock('the-package-to-mock', () => ({
  methodToMock: jest.fn()
}));

import { methodToMock } from 'the-package-to-mock'

it('test1', () => {
  methodToMock.mockImplementation(() => 'someValue')
})

it('test2', () => {
  methodToMock.mockImplementation(() => 'anotherValue')
})
```