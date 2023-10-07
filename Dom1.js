var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete event listener
itemList.addEventListener('click', removeItem);

// Filter event listener
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input values
    var inputValue = document.getElementById('item').value;
    var descriptionValue = document.getElementById('Description').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // Add text nodes with input values
    var newText = document.createTextNode(inputValue);
    var descriptionNode = document.createTextNode(descriptionValue);

    // Append text nodes to li element
    li.appendChild(newText);
    li.appendChild(descriptionNode);

    // Append li to itemList
    itemList.appendChild(li);

    // Clear input fields
    // document.getElementById('item').value = '';
    // document.getElementById('Description').value = '';
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('list-group-item')) {
        var item = e.target;
        itemList.removeChild(item);
    }
}

// Filter items
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1 || description.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
