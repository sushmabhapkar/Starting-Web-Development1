// localStorage.setItem('name','Bob')
// console.log(localStorage.getItem('names'))


// sessionStorage.setItem('name','sushma');
// console.log(sessionStorage.getItem('name'))
// console.log(typeof getItem)
// sessionStorage.removeItem('name');

// document.cookie='name=sushma'

var form=document.getElementById('userForm');
const list=document.getElementById('list');
console.log(list)
form.addEventListener('submit',addItem);

function addItem(e)
{
    e.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phonenumber=document.getElementById('phonenumber').value;
    // Retrieve the existing user details from local storage
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    //generate unique key
 //const uniqueKey=Date.now();

    const userDetails={
        name:name,
        email:email,
        phonenumber:phonenumber

    };

    localStorage.setItem(userDetails.email,JSON.stringify(userDetails));
    showUserOnScreen(userDetails);


    //Add the new user details to the existing array
       function showUserOnScreen(userDetails)
       {
                  const parentElem=document.getElementById('list');
                  const childElem=document.createElement('li');
                  childElem.textContent=userDetails.name+'-'+userDetails.email+'-'+userDetails.phonenumber;
                  parentElem.appendChild(childElem);
            
       }





   
    // localStorage.setItem('userDetails', JSON.stringify(storedUserDetails))||[];
    // alert("Details have been stored in local storage.");
    // const li= document.createElement('li')
    // const nameElement = document.createElement('span');
    // nameElement.textContent = `Name: ${name}`;
    // const emailElement = document.createElement('span');
    // emailElement.textContent = `Email: ${email}`;
    // const phoneElement = document.createElement('span');
    // phoneElement.textContent = `Phone Number: ${phonenumber}`;
    // li.appendChild(nameElement)
    // li.appendChild(emailElement)
    // li.appendChild(phoneElement)
    // list.appendChild(li);
      

};

