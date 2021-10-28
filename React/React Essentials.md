
# React Essentials

- [react-hooks-flow](https://github.com/donavon/hook-flow)
- [An example of useAsyncEffect source example explore](https://codesandbox.io/s/useasynceffect-hph2n)
- [Let's build react-query in 150 lines of code](https://www.youtube.com/watch?v=9SrIirrnwk0&ab_channel=ReactConferencesbyGitNation)
- [A summary of React hooks](https://twitter.com/tylermcginnis/status/1169667360795459584?s=20)
	- useState: Persist value between renders, trigger re-render 
	- useRef: Persist value between renders, no re-render 
	- useEffect: Side effects that run after render
	- useReducer: useState in reducer pattern 
	- useMemo: Memoize value between renders 
	- useCallback: Persist ref equality between renders
- [useReducer](https://gist.github.com/katesroad/2c6f00c9e98e0b815000649435525ac7)
	```ts
	const [state, setState] = useReducer(reducerFn, initialState];
	/* action is the parameter used to change old state
	 reducerFn returns a newState based in the action & prevState
	 action can be
		 1. newState
		 2. action
		 3. function that generates action
	 */
    const reducerFn = (prevState, change) => newState;
	```
	
- [Error Boundary in React](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react)
- [useMemo Vs useEffect + setState](https://stackoverflow.com/questions/56028913/usememo-vs-useeffect-usestate)
