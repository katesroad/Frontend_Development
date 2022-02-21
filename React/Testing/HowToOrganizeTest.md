# How to arrange test

- Three types of test
	- unit
	- integration
	- end to end test
- how can we write good tests
	- the pattern: **arrange-act-assert**
- The pattern
	- **Arrange**:
		Arrange steps should setup the test case. Handle all the setup operations at the start of the test
	- **Act** on the target behavior. Act steps should cover the main thing to tested. Usually, one act, one assert.
	- **Assert**:	expected outcomes. Act steps should elicit some sort of responses. Assert steps verify the goodness or badness of that response.

Behavior-driven-development follows the arrange-act-driven pattern by another name: given-when-then. 

- More advice

Arrange-Act-Assert is powerful because it is simple. It forces tests to focus on independent, individual behaviors. It separates setup actions from the main actions. It requires test to make verifications and not merely run through motions. Notice how the pattern is not Arrange-Act-Assert-Act-Assert – subsequent actions and assertions belong in separate tests! Arrange-Act-Assert is a great pattern to follow for writing good functional tests.


- Utilize with testing react component

```ts

describe('Expect Dropdown interaction is right', () => {
	// Need to disable auto cleanup for react testing library
	beforeAll(() => {
		// arange
		render(<Dropdown options={options} open={false} />)
	})

	test('Should open dropdown if user clicks the expand button', () => {
		// Only test the dropdown option expanding behavior
		// some act, assertion
	});

	test('Should close drodpdown and select an item if user clicks enabled dropdown option', () => {
		// Only test select behavior

	})
})

```

- Reference: 
	- [arrange-act-assert-a-pattern-for-writing-good-tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
	- [setup for jest and react testing library](https://testing-library.com/docs/react-testing-library/setup/#jest-27)


