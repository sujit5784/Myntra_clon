
// Display All Items on Home page

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector(".items-container");

    let innerHTML = '';
    items.forEach(item =>{
        innerHTML += `<div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        
        <div class="company-name">${item.company}</div>
        
        <div class="item-name">${item.item_name}</div>
        
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    })
    
    itemsContainerElement.innerHTML = innerHTML;
}


// Add Items in Bag

let bagItems = [];

function addToBag(itemId){
    bagItems.push(itemId)
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if (bagItems.length >0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}


// Load all Containt on Web Page

function onload(){
    displayItemsOnHomePage();
    displayBagIcon();
}

onload();

