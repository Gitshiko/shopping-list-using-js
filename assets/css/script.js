
let shoppingList = [];
var text = "";
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
   
}
 



       
    
