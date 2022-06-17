function printDOM(node, prefix) {
  console.log(prefix + node.nodeName);
  console.log("cNL: " + node.childNodes.length);
  for (let i = 0; i < node.childNodes.length; i++) {
    printDOM(node.childNodes[i], prefix + "\t");
  }
}
printDOM(document, "");
