# Key take aways about testing React applications

- Why: gain confidence in shipping products
- What: What to test
	- Focus on how your user use it
		- end user
		- developer user
		- **NOT**: test users
	- Features oriented: Feature documentation (for developers)
	- Granularity: Not too much, most about integration test
- How for **unit test**:
	- Mock
	- Identify what to test
	- organize your test cases
	  - Single action for a single test case
	  - Principle: 
	  	- arrange -> action -> assertion
		- abstract duplication with beforeEach/beforeAll

- References
	1.  [arrange-act-assert-a-pattern-for-writing-good-tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
