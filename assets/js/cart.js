let carts = document.querySelectorAll('.button.small');

// Test
// const c = new Cart();
// const product1 = new Product('prod1', 'Mancare 1', 25.00);
// const product2 = new Product('prod2', 'Bautura max', 1160.00);

// c.addProduct(product1);
// console.log(`The cart has ${ c.productCount } products so far`, c);

// c.addProduct(product2);
// console.log(`The cart has ${ c.productCount } products so far`, c);

// c.addProduct(product1);
// console.log(`The cart has ${ c.productCount } products so far`, c);
// Test

for ( let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () =>{
		
		const category = carts[i].dataset.category;

		const inMemoryProduct = productsEx[category][i % productsEx[category].length];
		const newProduct = new Product(inMemoryProduct.tag, inMemoryProduct.name, inMemoryProduct.price);
		addProduct(newProduct);
		// cartNumbers(products[i]);
		// totalCost(products[i]);
		
		// addProduct(products)
	})
}

function addProduct(product) {
	orderCart.addProduct(product);
	updateTopProductCount()
}

function onLoadCartNumbers(){
	let productNumbers = sessionStorage.getItem('cartNumbers');

	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product){
	let productNumbers = sessionStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if( productNumbers ){
		sessionStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
		sessionStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);

}

function setItems(product){
	let cartItems = sessionStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	console.log(1, cartItems);
	if(cartItems != null){
		if(cartItems[product.tag] === undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			};
			console.log(2, cartItems);
		}
		cartItems[product.tag].inCart += 1; 
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}


	sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
	let cartCost = sessionStorage.getItem('totalCost');
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		sessionStorage.setItem("totalCost", cartCost + product.price);
	}
	else {
		sessionStorage.setItem("totalCost", product.price);
	}
}

/*
function myFunc(e, tag){
	e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
	let cartItems = sessionStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	if (Object.prototype.hasOwnProperty.call(cartItems, tag)) {
        delete cartItems[tag]
        console.log("DA")
    }
    sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
*/


function myFunc(e, tag){
	e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
	let cartItems = sessionStorage.getItem('productsInCart');
	if (!cartItems) alert('some error');

	cartItems = JSON.parse(cartItems);
	cartItems = Object.values(cartItems);

	const idx = cartItems.findIndex(cartItem => cartItem.tag === tag);
	if (idx < 0) return;

	cartItems.splice(idx, 1);

	let productCount = 0, totalCost = 0;
	for (let i = 0; i < cartItems.length; i++) {
		productCount += cartItems[i].inCart;
		totalCost += Number(cartItems[i].inCart * cartItems[i].price);
	}
	/* Update cart total, product count etc */

    sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
    sessionStorage.setItem("totalCost", totalCost);
    sessionStorage.setItem("cartNumbers", productCount);

    document.querySelector('#productsTotal').innerHTML = `${ totalCost },00 lei`;
  	// event emitter
  	// emitter.emit('onProductRemoved')
}


function displayCart(){
	let cartItems = sessionStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = sessionStorage.getItem('totalCost');
	if( cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			name=item.name
			tag=item.tag
			productContainer.innerHTML += `
			<div style="display: flex; width: 100%;">
				<div class="product">
					<button class="remove-item-from-cart-btn" onclick="myFunc(this, '${ tag }')"><ion-icon name="close-circle-outline"></ion-icon></button>
					${name}
				</div>
				<div class="price">${item.price},00 lei</div>
				<div class="quantity">
					<ion-icon name="arrow-back-circle-outline"></ion-icon>
					<span>${item.inCart}</span>
					<ion-icon name="arrow-forward-circle-outline"></ion-icon>
				</div>
				<div class="total">
					${item.inCart * item.price},00 lei
				</div>
			</div>
			`
		});
		productContainer.innerHTML += `
			<div class="backetTotalContainer ">
				<h3 class="backetTotalTitle">
				Totalul de plata:
				</h3>
				<h3 id="productsTotal" class="backetTotal">
					${cartCost},00 lei
				</h3>
			</div>
		`
	}
}
onLoadCartNumbers();
//displayCart();
renderCart();
