// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//console.log(itemList);
// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//Childnodes
//console.log(itemList.childNodes);

// //children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// console.log(itemList.children[1].style.background = 'yellow');

// //firstChild
// console.log(itemList.firstChild);// givers text (line break)
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1'

//lastchild
//console.log(itemList.lastChild);// givers text (line break)
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'hello 4'


//nextSibling
//console.log(itemList.nextSibling);// givers text (line break)
//nextElementSibling
//console.log(itemList.nextElementSibling);


//priviousSibling
//console.log(itemList.previousSibling);// givers text (line break)
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';


// createElement 

// create a div
var newDiv = document.createElement('div');
//add class
newDiv.className='hello';
// add id
newDiv.id = 'hello 1'
// add atributes
newDiv.setAttribute('title','Hello Div');
//console.log(newDiv);

// Create text node
var newDivText = document.createTextNode('Hello World')

// add text to node
newDiv.appendChild(newDivText);
//console.log(newDiv);

var container = document.querySelector('header .container');
//console.log(container);
var h1 = document.querySelector('header h1');
//console.log(h1);

container.insertBefore(newDiv,h1);
newDiv.style.fontSize = '30px';


//add HEllo word before Item 1
var newList = document.createElement('li');
newList.className = 'list-group-item';

var newListText = document.createTextNode('Hello World')
newList.appendChild(newListText);
//console.log(newList);

var items = document.querySelector('.container ul');
var li = document.querySelector('.container ul li');
//console.log(items);
//console.log(li);
items.insertBefore(newList,li);
console.log(newList);
