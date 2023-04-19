---
layout: "../layouts/layout.astro"
---

## Basic layout setup

```js title="somethingComponent.ts" {4-6}
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
 
const CodeBlock = ({codestring}) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
```
