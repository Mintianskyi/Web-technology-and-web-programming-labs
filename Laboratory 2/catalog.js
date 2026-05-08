const catalogData = [
    {
        id: 1,
        name: "Навушники Marshall Major IV 4 Brown",
        category: "headphones",
        price: 3999,
        img: "./image/headphone.webp"
    },
    {
        id: 2,
        name: "Ігровий ПК AMD Ryzen 9 5900X / RTX 4060",
        category: "pc",
        price: 49999,
        img: "./image/Gaming PC AMD Ryzen 9 5900X.webp"
    },
    {
        id: 3,
        name: "Ноутбук Apple MacBook Air 15.3\" M2",
        category: "laptops",
        price: 76499,
        img: "./image/Apple MacBook Air laptop.webp"
    },
    {
        id: 4,
        name: "Монітор 27\" MSI MAG 274QRF-QD E2",
        category: "monitors",
        price: 12699,
        img: "./image/Monitor 27 MSI MAG 274QRF-QD E2.webp"
    },
    {
        id: 5,
        name: "Навушники Redmi Buds 8 Active",
        category: "headphones",
        price: 919,
        img: "./image/Redmi Buds 8 Active headphones.webp"
    }
];

const catalogContainer = document.getElementById('catalog-container');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');

function renderCatalog(productsArray) {

    catalogContainer.innerHTML = "";

    if (productsArray.length === 0) {
        catalogContainer.innerHTML = "<p>Товарів не знайдено.</p>";
        return;
    }

    let catalogHTML = "";
    
    for(let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
        
        let cardHTML = `
            <div class="catalog-card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price} ₴</p>
                <button class="buy-btn">В кошик</button>
            </div>
        `;
        catalogHTML += cardHTML;
    }
    
    catalogContainer.innerHTML = catalogHTML;
}

function updateCatalog() {
    let filteredProducts = [...catalogData];

    const searchQuery = searchInput.value.toLowerCase().trim();
    if (searchQuery !== "") {
        filteredProducts = filteredProducts.filter(function(product) {
            return product.name.toLowerCase().includes(searchQuery);
        });
    }

    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(function(product) {
            return product.category === selectedCategory;
        });
    }

    const selectedSort = sortFilter.value;
    if (selectedSort === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "name-asc") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderCatalog(filteredProducts);
}

searchInput.addEventListener('input', updateCatalog);
categoryFilter.addEventListener('change', updateCatalog);
sortFilter.addEventListener('change', updateCatalog);

renderCatalog(catalogData);