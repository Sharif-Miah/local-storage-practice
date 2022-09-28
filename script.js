
const storage = () => {
    const product = document.getElementById('product').value;

    const quantity = document.getElementById('quantity').value;

    addProductDB(product, quantity)

}

const getStoreCart = () => {
    const storeCart = localStorage.getItem('cart')
    let cart = {}
    if (storeCart) {
        cart = JSON.parse(storeCart)
    } return cart
}

const addProductDB = (product, quantity) => {
    let cart = getStoreCart();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
}