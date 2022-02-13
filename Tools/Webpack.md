# Webpack 5.x


- [Webpack 5.x](https://webpack.js.org/)
- [Use scss variables without importing variables path](https://github.com/shakacode/sass-resources-loader)
- [Import svg in React based projects](https://www.npmjs.com/package/@svgr/webpack)
 ```ts
declare module '*.png';
declare module '*.svg' {
	const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
```
