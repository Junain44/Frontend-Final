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
                <h4 id="name">${product.name}</h4>
                <h4 id="describ">${product.description}</h4>
                <h4 id="price">${product.price}</h4>
                <button class="btn" type="submit" >Add to Cart</button>
                </div>
            </div>
            `;
            list.innerHTML += item;
            });
        });
}
getProd();
