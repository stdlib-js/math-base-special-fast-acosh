/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var acosh = require( './../lib' );


// FIXTURES //

var largerPositive = require( './fixtures/julia/larger_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acosh, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hyperbolic arccosine on the interval `[1.0,3.0]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 6.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hyperbolic arccosine on the interval `[3.0,28.0]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hyperbolic arccosine on the interval `[28.0,100.0]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = largerPositive.x;
	expected = largerPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hyperbolic arccosine for huge values', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = acosh( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided value less than `1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = -(randu()*1.0e6) + (1.0-EPS);
		t.strictEqual( isnan( acosh( v ) ), true, 'returns expected value when provided '+v );
	}
	t.end();
});
