# Version and Feature Flag


## Version

- 1. store application at client side in cookie
- 2. Rationale: compare the application version at client side and the server side
- 3. Save the version at build time
	    - process.env.CLIENT_VERSIOn
	    - interceptor at application API interaction, and compare the version stored at client side with run time
	    - remind user to upgrade version if version doesn't match

## Feature Flag


1. FeatureFlag collection

	- application_ids: applicationId [] | all
	- Enable request/feature if a specify user has that feature in application 