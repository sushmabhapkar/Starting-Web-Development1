// console.log(document.title)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.header)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[0])
// document.all[10].textContent="Hello"
//...............................getElementById.................................//
var HeaderTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(HeaderTitle);
// HeaderTitle.textContent='hello';
// HeaderTitle.innerText='goodbye';
//console.log(HeaderTitle.textContent='hello');
header.style.borderBottom='solid 3px #000'

//.................getElementByClassName.................................//
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

var items1=document.getElementById('tag')
console.log(items);
items1.style.fontWeight='bold';
items1.style.color='green';


