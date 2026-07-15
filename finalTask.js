/*
Task 1: Product Search (Easy)
Requirement:
•	Add a search input.
•	Search by product title.
•	Display matching products only.
•	If no product is found, show "No Products Found".
Skills:
•	filter()
•	includes()
•	DOM Rendering
*/

let products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Mouse", price: 500 },
    { id: 3, title: "Keyboard", price: 1500 },
    { id: 4, title: "Monitor", price: 12000 },
    { id: 5, title: "Headphones", price: 3000 }
];

function searchProduct() {

    let searchText = document.querySelector("#searchBox").value.trim().toLowerCase();

    let matchedProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchText);
    });

    let output = "";

    if (matchedProducts.length === 0) {

        output = "<h3>No Products Found</h3>";

    }
    else {

        matchedProducts.forEach((product) => {

            output += `<div><h3>${product.title}</h3>
            <p>Price : ₹${product.price}</p><hr></div>`;

        });

    }

    document.querySelector("#products").innerHTML = output;

    document.querySelector("#searchBox").value = "";

    document.querySelector("#searchBox").focus();

}

/*
Task 2: Category Filter (Medium)
Requirement:
•	Create category buttons:
o	All
o	Men's Clothing
o	Women's Clothing
o	Jewelery
o	Electronics
•	Clicking a button should display only that category.
Skills:
•	filter()
•	Event Listeners
•	Dynamic Rendering

*/

let productList = [
    { id: 1, title: "Men's T-Shirt", price: 799, category: "men's clothing" },
    { id: 2, title: "Men's Jeans", price: 1499, category: "men's clothing" },
    { id: 3, title: "Women's Kurti", price: 999, category: "women's clothing" },
    { id: 4, title: "Women's Handbag", price: 1799, category: "women's clothing" },
    { id: 5, title: "Gold Ring", price: 25999, category: "jewelery" },
    { id: 6, title: "Silver Necklace", price: 3999, category: "jewelery" },
    { id: 7, title: "Gaming Laptop", price: 65000, category: "electronics" },
    { id: 8, title: "Bluetooth Speaker", price: 2499, category: "electronics" }
];

// style format

let buttons = document.querySelector(".buttons");
buttons.style.display = "flex"
buttons.style.margin = "20px 0px";
buttons.style.gap = "10px"

//    To ALL Category
document.querySelector("#All").addEventListener("click", () => {
    let product = document.querySelector("#productList")
    product.innerHTML = `<h2>ALL Categories</h2>`

    productList.forEach(products => {

        product.innerHTML +=
            `<div>
                  <h3>${products.title}</h3>
                  <p>${products.price}</p>
             </div>`
    })
})


//    Mens category
document.querySelector("#Men").addEventListener("click", () => {

    let mensClothing = productList.filter((product) => {
        return product.category === "men's clothing";
    });
    let product = document.querySelector("#productList")
    product.innerHTML = `<h2>Mens category</h2>`
    mensClothing.forEach(products => {
        product.innerHTML +=
            `<div>
                     <h3>${products.title}</h3>
                     <p>${products.price}</p>
             </div>`
    })
    console.log(mensClothing);

});

//     womens category

document.querySelector("#Women").addEventListener("click", () => {

    let womensClothing = productList.filter((product) => {
        return product.category === "women's clothing";
    });
    let product = document.querySelector("#productList")
    product.innerHTML = `<h2>womens category</h2>`
    womensClothing.forEach(products => {
        product.innerHTML +=
            `<div>
                      <h3>${products.title}</h3>
                      <p>${products.price}</p>
                 </div>`
    })
    console.log(womensClothing);
});

//      Jewelery

document.querySelector("#Jewelery").addEventListener("click", () => {

    let Jewelery = productList.filter((product) => {
        return product.category === "jewelery";
    });

    let product = document.querySelector("#productList")
    product.innerHTML = `<h2>Jewelery Category</h2>`
    Jewelery.forEach(products => {
        product.innerHTML +=
            `<div>
               <h3>${products.title}</h3>
               <p>${products.price}</p>
             </div>`

    })

    console.log(Jewelery);

});

//             Electronics    

document.querySelector("#Electronics").addEventListener("click", () => {

    let Electronics = productList.filter((product) => {
        return product.category === "electronics";
    });
    let product = document.querySelector("#productList")
    product.innerHTML = `<h2>Electronics Category</h2>`
    Electronics.forEach(products => {
        product.innerHTML +=
            `<div>
               <h3>${products.title}</h3>
               <p>${products.price}</p>
             </div>`

    })

    console.log(Electronics);
});

/*
Task 3: Price Sorting (Medium)
Requirement:
Add two buttons:
•	Low → High
•	High → Low
Sort the products based on price without calling the API again.
Skills:
•	sort()
•	Arrow Functions
•	Array Copy ([...array])

*/

let lhButton = document.querySelector(".Api")
lhButton.style.display = "Flex"
lhButton.style.margin = "20px 5px"
lhButton.style.gap = "10px"

let Api = "https://fakestoreapi.com/products"
fetch(Api).then((data) => {
    return data.json()
})
    .then((data) => {

        //            products Low Price To High Price

        let sortAsc = [...data].sort((a, b) => a.price - b.price)
        document.querySelector("#LH").addEventListener("click", () => {
            let product = document.querySelector("#sortProductlist")
            product.innerHTML = "<h2>Products Sorted Ascending Order</h2>"
            sortAsc.forEach((item) => {
                product.innerHTML +=
                    `<div>
                            <h3>${item.title}</h3>
                            <p>Price : ${item.price} $</p>
                     </div>`
            })
        })

        //      products Low Price To High Price

        let sortDesc = [...data].sort((a, b) => b.price - a.price)
        document.querySelector("#HL").addEventListener("click", () => {
            let product = document.querySelector("#sortProductlist")
            product.innerHTML = "<h2>Products Sorted Descending Order </h2>"
            sortDesc.forEach(items => {
                product.innerHTML +=
                    `<div>
                   <h3>${items.title}</h3>
                   <p>Price : ${items.price} $</p>
            </div>`
            })
        })

    })



/*
Task 4: Product Details Popup (Medium-Hard)
Requirement:
When the user clicks on a product image,
•	Open a modal.
•	Show:
o	Full Image
o	Title
o	Full Description
o	Price
o	Rating
o	Category
Skills:
•	Modal
•	Event Delegation
•	Dynamic DOM

*/

let Api2 = 'https://fakestoreapi.com/products'
let productData = []
fetch(Api2).then((data) => {
    return data.json()
})


    .then((data) => {
        productData = data


        let productContainer = document.querySelector("#productCards");
        productContainer.innerHTML = ""

        productContainer.style.display = "flex";
        productContainer.style.flexWrap = "wrap";
        productContainer.style.gap = "20px";


        productData.forEach(item => {
            productContainer.innerHTML +=
                `<div style="border:1px solid blue; 
                            padding:10px; width:220px;">
                      <img src = "${item.image}" data-id="${item.id}"  width = "150"><br><br> 
                      <h3>${item.title.slice(0, 25)}</h3>
                      <p>Price : ${item.price} $</p>
                </div>`
        })
    })

document.querySelector("#productCards").addEventListener("click", (e) => {

    if (e.target.tagName === "IMG") {
        let selectedProduct = productData.find((item) => {
            return item.id === Number(e.target.dataset.id)
        })
        console.log(e.target.dataset.id)
        console.log(selectedProduct);

        let popup = document.querySelector("#popupData");
        let modal = document.querySelector("#modal");
        let modalContent = document.querySelector("#modalContent");
        popup.innerHTML = `<img src="${selectedProduct.image}" width = "200"><br><br>
                           <h2>${selectedProduct.title}</h2>

                            <p><b>Description:</b><br>
                            ${selectedProduct.description}</p>

                            <p><b>Category:</b>
                            ${selectedProduct.category}</p>

                            <p><b>Price:</b>
                            $${selectedProduct.price}</p>

                            <p><b>Rating:</b>
                            ⭐ ${selectedProduct.rating.rate}
                            (${selectedProduct.rating.count} Reviews)</p>
                            `;

        modal.style.display = "flex";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0,0,0,0.5)";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";

        modalContent.style.backgroundColor = "white";
        modalContent.style.padding = "20px";
        modalContent.style.borderRadius = "10px";
        modalContent.style.width = "500px";
        modalContent.style.textAlign = "center";
        modalContent.style.position = "relative";
    }
})
let close = document.querySelector("#close");

close.style.display = "block";
close.style.fontSize = "20px";
close.style.fontWeight = "bold";
close.style.cursor = "pointer";
close.style.color = "Red"
close.style.textAlign = "Center";
close.style.marginTop = "20px";
close.style.paddingRight = "10px";

document.querySelector("#close").addEventListener("click", () => {

    document.querySelector("#modal").style.display = "none";

});


/*

Task 5: Shopping Cart (Company-Level)
Requirement:
•	Add an Add to Cart button.
•	Cart icon should display the item count.
•	Clicking Add to Cart multiple times should increase the quantity instead of creating duplicate items.
•	Display:
o	Product Name
o	Quantity
o	Total Price
o	Grand Total
Skills:
•	Arrays
•	Objects
•	find()
•	findIndex()
•	reduce()

*/

let apiProducts = []
let Task5Api = 'https://fakestoreapi.com/products'
fetch(Task5Api).then((data) => {
    return data.json()
})
    .then((data) => {
        apiProducts = data

        let productCart = document.querySelector("#productCards2")
        productCart.innerHTML = ""

        productCart.style.display = "flex";
        productCart.style.flexWrap = "wrap";
        productCart.style.gap = "20px";


        apiProducts.forEach(items => {
            productCart.innerHTML += `<div style="border:1px solid red; 
                              padding:10px; width:220px;">
                              <img src="${items.image}" width ="150">
                              <h3>${items.title.slice(0, 20)}</h3>
                              <p style="margin-bottom:10px;">
                              Price : $${items.price}</p>
                             
                            
                              <button data-id="${items.id}">Add to Cart
                              </button>
                          </div>`
        });

        let cart = []
        document.querySelector("#productCards2").addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                let selectedProduct = apiProducts.find((item) => {
                    return item.id === Number(e.target.dataset.id)
                })

                let index = cart.findIndex((item) => {
                    return item.id === selectedProduct.id;
                });

                if (index === -1) {

                    cart.push({
                        id: selectedProduct.id,
                        title: selectedProduct.title,
                        price: selectedProduct.price,
                        quantity: 1
                    });

                } else {

                    cart[index].quantity++;

                }
                let totalItems = cart.reduce((total, item) => {
                    return total + item.quantity;
                }, 0);

                document.querySelector("#cartCount").innerText = totalItems;

                // Display Cart
                let cartContainer = document.querySelector("#cartItems");

                cartContainer.innerHTML = "";

                cart.forEach((item) => {

                    cartContainer.innerHTML += `
                        <div style="border:1px solid red; padding:10px; margin-top:10px;">
                            <h3>${item.title}</h3>

                            <p>Quantity : ${item.quantity}</p>

                            <p>Total Price : $${item.price * item.quantity}</p>
                        </div>
                    `;

                });
                // Grand Total
                let grandTotal = cart.reduce((total, item) => {
                    return total + (item.price * item.quantity);
                }, 0);

                document.querySelector("#grandTotal").innerText = grandTotal;
            }
        })

    });

