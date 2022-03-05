# Typescript related solutions

- Override library imports

```ts
declare module '@module/core' {
	import ModuleComponent, {ModuleComponentProps} from '@module/core';

	class MainComponent<T, S> extends ModuleComponent<
		Omit<ModuleComponentProps, 'propA'> & {propA: CustomProp}
	> {}


	export CustomType  = {
		Container: MainComponent
	}
};

```