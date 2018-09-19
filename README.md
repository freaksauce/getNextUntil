# getNextUntil
This is a packaged version of the [Chris Ferdinandi](https://gomakethings.com) utility function that gets all next siblings of an element in the DOM until a selector is found.

## Installation
```
npm i getnextuntil
```

## Usage
Given the following markup:
```
<ul>
	<li>Item 1</li>
	<li class="stop-here">Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
	<li id="find-me">Item 5</li>
	<li>Item 6</li>
	<li>Item 7</li>
	<li class="stop-here">Item 8</li>
	<li>Item 9</li>
</ul>
```

```
import getnextuntil from 'getnextuntil'

var findMe = document.querySelector('#find-me');

// Returns the first two list items after #find-me
var nextStop = getNextUntil(findMe, '.stop-here');

// Returns all list items after #find-me
var nextAll = getNextUntil(findMe);

// Returns the first two list items before #find-me
var prevStop = getPreviousUntil(findMe, '.stop-here');

// Returns all list items before #find-me
var prevAll = getPreviousUntil(findMe);
```

The `matches()` method was implemented inconsistently with vendor prefixes across many browsers for a while. You should [include a polyfill](https://vanillajstoolkit.com/polyfills/matches/) for it to make sure these work properly.