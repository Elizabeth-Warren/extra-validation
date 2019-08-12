# extra-validation

Validate form fields with special rules.

```sh
$ npm install @ewarren/extra-validation
```

**WARNING**: It is recommended to load this package asynchronously given the relatively large dataset (>150kb) that has to be loaded.

```js
import('@ewarren/extra-validation').then(module => ...);
```

## Real US Zipcode Validation

Covers all US states, territories and armed forces zip codes. Zip codes were imported from [https://www.npmjs.com/package/zipcodes](https://www.npmjs.com/package/zipcodes).

```js
import { isRealZipcode } from '@ewarren/extra-validation';

isRealZipcode(10010) // true
isRealZipcode('10010') // true
isRealZipcode('10042') // false
```

## Email Domain Recommendation

Check if the domain of an email input is likely meant to be something else. Common email domain providers imported from [https://www.npmjs.com/package/email-providers](https://www.npmjs.com/package/email-providers).

```js
import { checkEmailDomain } from '@ewarren/extra-validation';

checkEmailDomain('ewarren@gmail.com') // null
checkEmailDomain('ewarren@gmai.com') // gmail.com
checkEmailDomain('EWARREN@GMAI.COM') // gmail.com
checkEmailDomain('ewarren') // null
```

## Local Development

```sh
# All commands require Docker

# Run test suite
$ make tests

# Build the library
$ make build-lib

# Build the data file
$ build-data
```
