// localStorage.setItem('name','Bob')
// console.log(localStorage.getItem('names'))


// sessionStorage.setItem('name','sushma');
// console.log(sessionStorage.getItem('name'))
// console.log(typeof getItem)
// sessionStorage.removeItem('name');

// document.cookie='name=sushma'


var form = document.getElementById('userForm');
const list = document.getElementById('list');
console.log(list);
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    
    const userDetails = {
        name: name,
        email: email,
        phonenumber: phonenumber
    };

    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    showUserOnScreen(userDetails);

    // Add a new user details to the list with a delete button
    function showUserOnScreen(userDetails) {
        const parentElem = document.getElementById('list');
        const childElem = document.createElement('li');
        childElem.textContent = userDetails.name + '-' + userDetails.email + '-' + userDetails.phonenumber;
       
       
       const deleteButton=document.createElement('input');
       deleteButton.type="button";
       deleteButton.value='delete';
       deleteButton.onclick=()=>
       {
        localStorage.removeItem(userDetails.email);
        parentElem.removeChild(childElem);
       }

    //    childElem.appendChild(deleteButton);
    //     parentElem.appendChild(childElem);

    
    const editButton=document.createElement('input');
    editButton.type="button";
    editButton.value='Edit';
    editButton.onclick=()=>
    {

      localStorage.removeItem(userDetails.email);
      parentElem.removeChild(childElem);
      document.getElementById('usernameInputTag').value=userDetails.name;
      document.getElementById('emailInputField').value=userDetails.email;
      document.getElementById('phoneNumberInputTag').value=userDetails.phonenumber;


    }
        childElem.appendChild(deleteButton);
        childElem.appendChild(editButton);
        parentElem.appendChild(childElem);
        


        
    }
};