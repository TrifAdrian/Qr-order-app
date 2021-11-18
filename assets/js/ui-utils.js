const updateTopProductCount = () => {
    $$$('a.cart span').textContent = orderCart.productCount;
}

const renderTotal = () => {
    const div = $$$('.cart-total');
    div.innerHTML = `Pretul total al comenzii: ${ orderCart.total.toFixed(2) } lei`;
}

const renderCart = () => {
    updateTopProductCount();
    
    // Checking if we are on the "cart" page
    const productsList = $$$('.products');
    if (!productsList) { console.log('Wrong page'); return; }

    productsList.innerHTML = '';
    orderCart.products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container'); 

        // Product name
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('product-name');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = product.product.name;
        nameDiv.appendChild(nameSpan);
        
        // Product price
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('product-price');
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `${ product.product.price.toFixed(2) } lei`;
        priceDiv.appendChild(priceSpan);
        
        // Product quantity
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('product-quantity');
        const arrowLeft = document.createElement('ion-icon');
        arrowLeft.classList.add('arrow');
        arrowLeft.setAttribute('name', 'arrow-back-circle-outline');
        arrowLeft.onclick = () => { orderCart.decreaseQuantity(product.product.tag); renderCart(); }

        const arrowRight = document.createElement('ion-icon');
        arrowRight.classList.add('arrow');
        arrowRight.setAttribute('name', 'arrow-forward-circle-outline');
        arrowRight.onclick = () => { orderCart.increaseQuantity(product.product.tag); renderCart(); }

        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = product.quantity;
        quantityDiv.appendChild(arrowLeft);
        quantityDiv.appendChild(quantitySpan);
        quantityDiv.appendChild(arrowRight);

        // Product total
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('product-total');
        const totalSpan = document.createElement('span');
        const total = product.quantity * product.product.price;
        totalSpan.textContent = `${ total.toFixed(2) } lei`;
        totalDiv.appendChild(totalSpan);

        // Remove item from cart btn
        const removeBtnDiv = document.createElement('div');
        removeBtnDiv.classList.add('product-remove-btn');
        const removeBtn = document.createElement('ion-icon');
        removeBtn.setAttribute('name', 'trash-outline');
        removeBtn.onclick = () => { orderCart.removeItem(product.product.tag); renderCart(); }
        removeBtnDiv.appendChild(removeBtn);

        // Separator
        const hr = document.createElement('hr');

        productContainer.appendChild(nameDiv);
        productContainer.appendChild(priceDiv);
        productContainer.appendChild(quantityDiv);
        productContainer.appendChild(totalDiv);
        productContainer.appendChild(removeBtnDiv);
        
        productsList.appendChild(productContainer);
        productsList.appendChild(hr);
    });

    renderTotal();
}
