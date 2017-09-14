# html-inject-vdom

Transform stream for injecting virtual DOM tags into html.

### example:

```js
var injectVdom = require('html-inject-vdom')

process.stdin
.pipe( injectVdom(['app', 'tabs']) )
.pipe( process.stdout )
```

input:
```html
<html><head></head><body>hello</body></html>
```
output:
```html
<html><head></head><body><div id="app"></div><div id="tabs"></div>hello</body></html>
```

### cli

```bash
cat index.html | htmlinjectvdom "app" > output.html
```

### Gotcha:
requires a head tag to be present in the src.