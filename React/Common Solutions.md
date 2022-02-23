
# React related solutions

1. [Websocket with react-query](https://tkdodo.eu/blog/using-web-sockets-with-react-query)
2. forceUpdate
```ts
const [, forceUpdate] = React.useReducer((c) => c + 1, 0);
```
3. Force `useCallback` or `useMemo` to update on component properties
   - Why: [Keys help React identify which items have changed, are added, or are removed](https://reactjs.org/docs/lists-and-keys.html#keys)
   - How:add a key to the component that utlize the calculated value from useCallback/useMemo.
