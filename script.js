
const storage = () => {
    const product = document.getElementById('product').value;

    const quentity = document.getElementById('quentity').value;
    console.log(product, quentity);

    const cart = {}
    cart[product] = quentity;
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getStore = () => {
    const storeCart = localStorage.getItem('cart')
    const cart = {}
    if (storeCart) {
        cart = JSON.parse(storeCart)
    } else {
        return cart
    }
}