---
layout: "../layouts/layout.astro"
---

```js title="somethingComponent.ts" {1-2, 5-8} showLineNumbers
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
