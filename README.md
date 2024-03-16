<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# acosh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hyperbolic arccosine][inverse-hyperbolic] of a number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fast-acosh
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var acosh = require( '@stdlib/math-base-special-fast-acosh' );
```

#### acosh( x )

Computes the [hyperbolic arccosine][inverse-hyperbolic] of a `number` (in radians).

```javascript
var v = acosh( 1.0 );
// returns 0.0

v = acosh( 2.0 );
// returns ~1.317

v = acosh( 0.5 );
// returns NaN
```

The domain of `x` is restricted to `[1,+infinity)`. If `x < 1`, the function will return `NaN`.

```javascript
var v = acosh( 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For large `x`, the function will overflow.

    ```javascript
    var v = acosh( 1.0e308 );
    // returns Infinity
    // (expected 709.889355822726)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var acosh = require( '@stdlib/math-base-special-fast-acosh' );

var x = linspace( 1.0, 5.0, 103 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( acosh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/fast/acosh.h"
```

#### stdlib_base_fast_acosh( x )

Computes the [hyperbolic arccosine][inverse-hyperbolic] of a double-precision floating-point number.

```c
double out = stdlib_base_fast_acosh( 1.0 );
// returns 0.0

out = stdlib_base_fast_acosh( 2.0 );
// returns ~1.317
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_fast_acosh( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/fast/acosh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };
    
    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_fast_acosh( x[ i ] );
        printf( "acosh(%lf) = %lf\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast-acosh.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast-acosh

[test-image]: https://github.com/stdlib-js/math-base-special-fast-acosh/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fast-acosh/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast-acosh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast-acosh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast-acosh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast-acosh/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast-acosh/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-fast-acosh/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-fast-acosh/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-fast-acosh/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-fast-acosh/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-fast-acosh/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-fast-acosh/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-acosh/main/LICENSE

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math-base-special-acosh

<!-- </related-links> -->

</section>

<!-- /.links -->
