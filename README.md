# flat-await

When working with `async/await`, we usually have to do this:

```javascript
async function foo() {
  try {
    const bar = await baz();
    . . .
  } catch (e) {
    console.error(e);
  }
}
```

That sucks.  Instead, `flat-await` lets you do this:

```javascript
import p from 'flat-await';

async function foo() {
  const [err, bar] = await baz();
  if (err) throw err;
  . . .
}
```

Re-throwing the error will propagate it out, or you can do something else more appropriate.
