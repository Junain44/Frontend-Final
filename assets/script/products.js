function getProd() {
    fetch("https://glacial-sierra-17146.herokuapp.com/show_products/")
    .then((response) => response.json())
    .then((data) => {
        console.table(data);
        let list = document.getElementById('products');
        console.log(list);
        data.forEach((product) => {
            let item =`
            <div class ="product-con">
                <div class="product-image">
                    <img src=${product.image}/>
                </div>
                <div class="product-info">
                <h4>${product.name}</h4>
                <h4>${product.description}</h4>
                <h4>${product.price}</h4>
                <button class="btn" type="submit" onsubmit>Add to Cart</button>
                </div>
            </div>
            `;
            list.innerHTML += item;
            });
        });
}
getProd();
