
var shoppingList = [];
var text = "";
var ol = document.getElementById('list');
//var li = document.createElement("li");
ol.style.display = "none";
//li.style.display = "none";
let index = 1;
let input = document.getElementById('shopping-item');
let itemNumber = document.getElementById('itemNumberId');
let numberOfItems = document.getElementById('numberOfItemsId');
let basket = document.getElementById('basketId');
let finalList = document.getElementById('finalListId');
let form = document.getElementById('form');


input.addEventListener("keypress", function(event)
{   if (event.key === "Enter") {
        event.preventDefault();
        numberOfItems.innerHTML = index;
            
        let item = input.value;
        //console.log(item); 
        shoppingList[index-1] = " " + item;
        text = shoppingList.toString(); //a var is used because this needs to be used outside of this function
        basket.innerHTML = text;

        // for (i = 0; i <= shoppingList.length -1; i++) {
        //     const li = document.createElement("li");
        //     li.innerHTML = shoppingList[i];
        //     ul.appendChild(li);
        // }
        //console.log(shoppingList);
        index += 1;
        itemNumber.innerHTML = index; //This increases with every press Enter
        input.value = ""; //this clears the input field after press Enter
    }      
    
});



form.onsubmit=function(event) {
    event.preventDefault();
    //alert('working');
    finalList.innerHTML = 'Your Shopping List: ' + text;
    itemNumber.innerHTML = '1';
    numberOfItems.innerHTML = "0";
    basket.innerHTML = " ";
    //const listItem = document.getElementsByTagName(li);
    //listItem.style.display = "block";
    for (i = 0; i <= shoppingList.length -1; i++) {
        const li = document.createElement("li");
        li.innerHTML = shoppingList[i];
        ol.appendChild(li);
        }
    ol.style.display = "block";
       
}
 