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
var header=document.getElementById('main-header')
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
//========================================TASK 03============================================
//var items1=document.getElementById('tag')
//console.log(items);
//items1.style.fontWeight='bold';
//items1.style.color='green';

//========================================TASK 04==================================================
// var items2=document.getElementsByClassName('list-group-item');
// console.log(items2);
// items2[2].style.backgroundColor='green';

// for(var i=0;i<items2.length;i++)
// {
//     items2[i].style.fontWeight='bold';
// }


//=========================================TASK 05======================================================//

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello 2';
li[1].style.fontWeight='bold';
li[1].style.background='yellow'

for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='#f4f4f4';
}
