# extra-validation

Validate form fields with special rules.

**WARNING**: It is recommended to load this package asynchronously given the relatively large dataset that has to be loaded.

## Real US Zipcode Validation

Covers all US states, territories and armed forces zip codes.

```js
import { isRealZipcode } from '@ewarren/extra-validation';

isRealZipcode(10010) // true
isRealZipcode('10010') // true
isRealZipcode('10042') // false
```

## Email Domain Recommendation

TODO..

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
