function cartCount() {
    let x = productCount;
    document.getElementById("lblCartCount").innerHTML = x;
}

function add_to_cart(id) {
    let modal = document.getElementById$("contents");
    let cartItem = productArray.filter((product) =>{
        return product.ID == id;
    });
    productCount = cartList.push(cartItem[0]);
    let selectedItems = cartItem[0];

    let cart_stuff = `
    <div class="opened-modal-content">
    <div id="items${id}" product-prices=${selectedItems.name}>${selectedItems.description} :R${selectedItems.price}
        <button class="removeButton" onclick="removeItems(${id}) ">Remove</button>
        </div>
    </div>
    `;
    
    modal.innerHTML += cart_stuff;

    console.log(cartlist);
    console.log(productCount);

    function calculateTotalPrice(){
        let totalValue = document.getElementsByClassName("price")[0];
        let num1 = parseInt(totalValue.innerHTML);
        let num2 =document
        .getElementById("items" + id)
        .getAttribute("product-prices");

        let totalAmount = parseInt(num1) + parseInt(num2)
        totalValue.innerHTML = totalAmount;
        console.log(totalValue);
   }
   calculateTotalPrice();

   cartCount();
}

// checkout
function checkout() {
    let totals = document.getElementsByClassName("price")[0].innerHTML;
    alert(`Thankyou for purchasing Your total is R${totals}`);
    let clear = "";
    let x = document.getElementById("contents");
    x.innerHTML = clear;

    let f = productCount - productCount;

    document.getElementById("lblCartCount").innerHTML =f
    window.location.href = "./landing-page.html";    
}

// remove items on checkoutlist

function removeItems(id)
let recieptTotal = document.getElementsByClassName("price")[0];
let y = parseInt(recietTotal.innerHTML);
console.log(y);
let x = document.getElementById("items" + id).getAttribute("product-prices");
let total = parseInt(y) - parseInt(x);

if (total <= -1) {
    alert("something went wrong");
    window.location.reload();
}

recietTotal.innerHTML = total;
console.log(total);
document.getElementById("items" + id).remove();

if (total == 0) {
    window.location.href = "./landing-page.html";

}

    
