        const products = [
            {
                id: 1,
                name: "Meia Doguinho ",
                price: 29.90,
                image: "./FotosMeias/1.png",
                category: "memes"
            },
            {
                id: 2,
                name: "Meia 'Só sigo em frente porque esqueci como volta'",
                price: 29.90,
                image: "./FotosMeias/2.png",
                category: "memes"
            },
            {
                id: 3,
                name: "Meia Gato protege sua Pizza",
                price: 39.90,
                image: "./FotosMeias/3.png",
                category: "frases"
            },
            {
                id: 4,
                name: "Meias Descombinadas - Gato e Cachorro",
                price: 44.90,
                image: "./FotosMeias/4.png",
                category: "descombinadas"
            },
            {
                id: 5,
                name: "Meia Pinguim Surfista",
                price: 44.90,
                image: "./FotosMeias/5.png",
                category: "descombinadas"
            },
            {
                id: 6,
                name: "Meias Descombinadas - Sol e Lua",
                price: 49.90,
                image: "./FotosMeias/6.png",
                category: "interativas"
            },
            {
                id: 7,
                name: "Meia QR Code Interativo",
                price: 39.90,
                image: "./FotosMeias/7.png",
                category: "texturas"
            },
            {
                id: 8,
                name: "Meia Sushi",
                price: 39.90,
                image: "./FotosMeias/8.png",
                category: "texturas"
            },
        ];
        let cart = [];
        
        function loadProducts() {
            const productGrid = document.getElementById("productGrid");
            productGrid.innerHTML = "";
            
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Adicionar
                        </button>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        }
        
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            
            if (existingProductIndex >= 0) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            updateCart();
            showMessage(`${product.name} adicionado ao carrinho!`);
        }
        
        function updateCart() {
            const cartCount = document.getElementById("cartCount");
            const cartItems = document.getElementById("cartItems");
            const cartTotal = document.getElementById("cartTotal");
            let totalItems = 0;
            for (let i = 0; i < cart.length; i++) {
                totalItems += cart[i].quantity;
            }
            cartCount.textContent = totalItems;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `<div class="empty-cart">Seu carrinho está vazio</div>`;
            } else {
                cartItems.innerHTML = "";
                for (let i = 0; i < cart.length; i++) {
                    const item = cart[i];
                    const cartItem = document.createElement("div");
                    cartItem.className = "cart-item";
                    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <p class="cart-item-title">${item.name}</p>
                            <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    `;
                    cartItems.appendChild(cartItem);
                }
            }
            
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].price * cart[i].quantity;
            }
            cartTotal.textContent = `R$ ${total.toFixed(2)}`;
        }

        function increaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            item.quantity += 1;
            updateCart();
        }

        function decreaseQuantity(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
            updateCart();
        }

        function toggleCart() {
            const cartDropdown = document.getElementById("cartDropdown");
            cartDropdown.classList.toggle("active");
        }
        
        function checkout() {
            if (cart.length === 0) {
                showMessage("Adicione produtos ao carrinho antes de finalizar!");
                return;
            }
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].price * cart[i].quantity;
            }
            const clientBalance = 200.00; 
            const canPurchase = total <= clientBalance ? true : false;
            if (canPurchase) {
                showMessage("Compra realizada com sucesso!");
                cart = [];
                updateCart();
                toggleCart();
            } else {
                showMessage("Saldo insuficiente!");
            }
        }

        function showMessage(text) {
            const message = document.getElementById("message");
            message.textContent = text;
            message.classList.add("show");
            setTimeout(() => {
                message.classList.remove("show");
            }, 3000);
        }
        function scrollToProducts() {
            document.getElementById("products").scrollIntoView({ behavior: "smooth" });
        }
        
        window.onload = function() {
            loadProducts();
            updateCart();
        };
        
        document.addEventListener("click", function(event) {
            const cartIcon = document.querySelector(".cart-icon");
            const cartDropdown = document.getElementById("cartDropdown");
            
            if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target) && cartDropdown.classList.contains("active")) {
                cartDropdown.classList.remove("active");
            }
        });
    