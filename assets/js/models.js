function Product(tag, name, price) {
    this.tag = tag;
    this.name = name;
    this.price = price;

    return this;
}

function Cart() {
    const _store = () => {
        const obj = {
            products: this.products,
            total: this.total,
            productCount: this.productCount
        };
        sessionStorage.setItem('cart', JSON.stringify(obj));
    }

    const _get = () => {
        let sessionCart = sessionStorage.getItem('cart');
        if (!sessionCart) {
            this.products = [];
            this.total = 0;
            this.productCount = 0;
        } else {
            sessionCart = JSON.parse(sessionCart);
            this.products = sessionCart.products;
            this.total = sessionCart.total;
            this.productCount = sessionCart.productCount;
        }
    }

    const _productTotal = () => {
        return this.products
            .map(product => (product.product.price * product.quantity))
            .reduce((total, currentQuantity) => total + currentQuantity, 0);
    }

    const _productCount = () => {
        return this.products.reduce((acc, cur) => acc + cur.quantity, 0);
    }

    const _addProduct = (product) => {
        if (!(product instanceof Product)) {
            throw new Error('Invalid product');
        }

        const idx = this.products.findIndex(prod => prod.product.tag === product.tag);

        // If the product does not exist
        if (idx === -1) this.products.push({ product, quantity: 1 });
        // If it exists, increase prod count
        else this.products[idx].quantity++;

        this.productCount = _productCount();
        this.total = _productTotal();

        this.storeToSessionStorage();
    }

    const _incQty = (productTag) => {
        const idx = this.products.findIndex(prod => prod.product.tag === productTag);
        if (idx === -1) return;

        this.products[idx].quantity++;
        this.productCount = _productCount();
        this.total = _productTotal();
        
        this.storeToSessionStorage();
    }

    const _decQty = (productTag) => {
        const idx = this.products.findIndex(prod => prod.product.tag === productTag);
        if (idx === -1) return;

        if (this.products[idx].quantity === 1) return;

        this.products[idx].quantity--;
        if (!this.products[idx].quantity) this.products.splice(idx, 1);
        this.productCount = _productCount();
        this.total = _productTotal();
        
        this.storeToSessionStorage();
    }

    const _removeItem = (productTag) => {
        const idx = this.products.findIndex(prod => prod.product.tag === productTag);
        if (idx === -1) return;

        this.products.splice(idx, 1);
        this.productCount = _productCount();
        this.total = _productTotal();
        
        this.storeToSessionStorage();

    }

    _get();
    
    this.storeToSessionStorage = _store;
    this.getSessionStorage = _get;
    this.total = _productTotal();
    this.addProduct = _addProduct;
    this.increaseQuantity = _incQty;
    this.decreaseQuantity = _decQty;
    this.removeItem = _removeItem;

    return this;
}