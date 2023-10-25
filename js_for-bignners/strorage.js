// localStorage.setItem('name','Bob')
// console.log(localStorage.getItem('names'))


// sessionStorage.setItem('name','sushma');
// console.log(sessionStorage.getItem('name'))
// console.log(typeof getItem)
// sessionStorage.removeItem('name');

// document.cookie='name=sushma'

var form=document.getElementById('userForm');
form.addEventListener('submit',addItem);

function addItem(e)
{
    e.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
//generate unique key
 const uniqueKey=Date.now();

    const userDetails={
        name:name,
        email:email
    };
    localStorage.setItem('userDetails_${uniqueKey}',JSON.stringify(userDetails));
    alert("Details have been stored in local storage.");

};

