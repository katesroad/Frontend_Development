# React-Query

1. [React Query practical guide](https://tkdodo.eu/blog/effective-react-query-keys)
2. [Typescript & react-query mutation](https://www.youtube.com/watch?v=ZbhGXD8KpQ8&ab_channel=LeoRoese)
3. [Websocket with react-query](https://tkdodo.eu/blog/using-web-sockets-with-react-query)
4. [React-Query show previous data & loading spinner](https://gist.github.com/katesroad/0122fe29306a5d59087c5de014befe53)
5. [Testing React-Query](https://www.youtube.com/watch?v=ZfvOHRX-FDM&ab_channel=MaksimIvanov)
6. When internet is offline, React-Query will pause after the first fetch, then continue with retries once you go online again
7. To migrate applications with an existing codebase using react-query, we need to disable cache temporarily before the migration is done.
8. To use react-query as state management solution, designing the queryKey properly is the key for a good architecture. Currently, the best practice is to utilize the [queryKey factories](https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories)
9. Naming convention
   1.  get useGet[domainName]
   2.  update/create/delete

10. To make query to be more granularly(single responsibility, **KISS**)
