//DOM api document node know is a node for the body element 
const node = document.body; 

let getPrint = function (typeDOM) { 
    console.log(typeDOM);
}
//Node type Read-only property that returns an integer representing the type pf the node , such as an element node(1) , attribute node(2) , text node(3)

getPrint(node.nodeType);
//nodeName read-only return a string reperesentng the name of the node
getPrint(node.nodeName);
//nodeValue 
//getPrint(node.nodeValue);
//childNodes return a nodeList of all child nodes of an element 

getPrint(node.childNodes);
//parentNOde 
getPrint(node.parentNode);
//firstChild 
getPrint(node.firstChild);
//lastChild 
getPrint(node.lastChild);
//attributes return a collection of all the attributes of elemtent node 

getPrint(node.attributes);

