# currency.js
query realtime currency rates using YQL.

API
----
```js
let promise = Currency.query(CODE1, CODE2);
```
__CODE1__ : Currency code (ex: USD)<br>
__CODE2__ : Currency code (ex: KRW)<br>
__RETURN__ : [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Example Usage
----
```js
<script src="co.js"></script>
<script src="flyjsonp.min.js"></script>
<script src="currency.js"></script>
<script>
"use strict";

co(function*(){
  let c = yield Currency.query('USD', 'KRW');
  
  console.log(c.Rate);
  console.log(c.Date);
  console.log(c.Ask);
  console.log(c.Bid);
});
</script>
```
