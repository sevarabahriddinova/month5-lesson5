 


document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;

    let product = {
        name: name,
        amount: parseInt(amount),
        price: parseInt(price)
    };

    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    alert('Mahsulot muvaffaqiyatli qoshildi!');

    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('price').value = '';

    renderProducts();
});

function renderProducts() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';

    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }

    products.forEach(function(product) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${product.name}</strong> - Miqdori: ${product.amount}, Narxi: ${product.price} so'm`;
        productList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});


