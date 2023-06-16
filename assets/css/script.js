const input = document.getElementById('shopping-item');
const itemNumberToAdd = document.getElementById('itemNumberId');
const numberOfItemsInCart = document.getElementById('numberOfItemsId');
const basket = document.getElementById('basketId');
const finalList = document.getElementById('finalListId');
const thankYou = document.getElementById('thankYouId');

let ol = document.getElementById('list');
ol.style.display = "none"; //to keep the list hidden until finished

let shoppingList = []; //This is a global variable (defined outside the functions)
let index = 1;


input.addEventListener("keypress", function(event)
{   if (event.key === "Enter") {
        event.preventDefault();
        
        const item = input.value;
        //console.log(item); 
        shoppingList[index-1] = " " + item;
        let basketText = shoppingList.toString(); //this is a short-cut method to get array values in a comma separated list.      
        basket.innerHTML = basketText;

        index += 1;
        itemNumberToAdd.innerHTML = index; // to change item number with press enter
        numberOfItemsInCart.innerHTML = index-1;// to change cart number with press enter
        input.value = ""; //this clears the input field after press Enter
    }      
    
});

form.onsubmit=function(event) {
    event.preventDefault();
    console.log(shoppingList);
    //alert('working');
    thankYou.innerHTML = 'Thank you for shopping with us!';
    finalList.innerHTML = 'Here is your Shopping List: ';
    
    itemNumberToAdd.innerHTML = '1'; //resetting the figures
    numberOfItemsInCart.innerHTML = "0"; //resetting the figures
    basket.innerHTML = " "; //resetting the figures
    
    //This is for writing array elements as an ol 
    for (i = 0; i <= shoppingList.length -1; i++) {
        const li = document.createElement("li");
        li.innerHTML = shoppingList[i];
        ol.appendChild(li);
        }
    ol.style.display = "block"; //for showing the message and ol after finishing
       
}
 



       
    
