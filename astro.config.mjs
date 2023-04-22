import { defineConfig } from 'astro/config';
import rehypePrettyCode from "rehype-pretty-code";
import json from "./public/moon_ii.json" assert { type: "json" };

 
const options = {
  // Specify the theme to use or a custom theme json, in our case
  // it will be a moonlight-II theme from
  // https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
  theme: json,
  // Callbacks to customize the output of the nodes
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    // Adding a class to the highlighted line
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    // Adding a class to the highlighted word
    node.properties.className = ['word'];
  },
};
// https://astro.build/config
export default defineConfig({
    markdown:{
        syntaxHighlight: false,
        rehypePlugins: [
            [rehypePrettyCode, options],
        ],      
    },
});
