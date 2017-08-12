# elegant-pair

## Introduction

Pairing functions are typically used in set theory and theoretical computer science, but can also be used as a simple reversible hashing algorithm on the set of integers.

This can be useful when working with a RDBMS, and it is necessary to construct an unique integer from two or more integers.

The *elegant-pair* module implements the pairing function created by [Matthew Szudzik](http://szudzik.com/ElegantPairing.pdf) from Wolfram Research, Inc.

## API

### Module Functions

#### pair(x, y)

Generate the elegant pair of the non-negative integers x and y

#### unpair(z)

Inverts an elegant pair into its component integers x and y

### Example

    const elegantPair = require('elegant-pair');

    let z = elegantPair.pair(92, 23);
    // 8579

    let xy = elegantPair.unpair(z);
    // [ 92, 23 ]

## Questions and Issues

For all questions and issues, please open an Issue in GitHub.

## License

Licensed liberally under MIT; see LICENSE for complete license text.
