const script = document.createElement('script');
script.src = 'Resources/main.js';
document.head.appendChild(script);

new Vue({
    el: '#app',
    data: {
        appMode: 'main',
		selectedProduct: null,
		currentProduct: null,
        menuVisible: false,
        loginFormVisible: false,
		basketUrl: 'Placing An Order.html',
        form: {
            email: '',
            password: '',
            username: ''
        },
        popularProducts: [
            {
                id: 1,
                link: "Precious Numismatics/Images/Australian Platinum Kangaroo.pdf",
                img: "Precious Numismatics/Images/Australian Silver Kangaroo.png",
                alt: "Монета 1",
                name: "Australian Platinum Kangaro",
                details: "Метал: Платина\nКраїна: Австралія\nПроба: 999\nВага: 31,1 г\nРік: 2023"
            },
            {
                id: 2,
                link: "Precious Numismatics/Images/American Buffalo.pdf",
                img: "Precious Numismatics/Images/American Buffalo.png",
                alt: "Монета 2",
                name: "<br>American Buffalo",
                details: "Метал: Срібло\nКраїна: США\nПроба: 999\nВага: 31,1 г\nРік: 2018"
            },
            {
                id: 3,
                link: "Precious Numismatics/Images/20th Anniversary Britannia.pdf",
                img: "Precious Numismatics/Images/20th Anniversary Britannia.png",
                alt: "Монета 3",
                name: "20th Anniversary Britannia",
                details: "Метал: Срібло\nКраїна: Британія\nПроба: 999\nВага: 31,1 г\nРік: 2017"
            },
			{
                id: 4,
                link: "Precious Numismatics/Images/Royal Coat of Arms.pdf",
                img: "Precious Numismatics/Images/Royal Coat of Arms.png",
                alt: "Монета 4",
                name: "Royal Coat of Arms",
                details: "Метал: Платина\nКраїна: Британія\nПроба: 999\nВага: 31,1 г\nРік: 2020"
            }
        ],
        forSaleProducts: [
            {
                id: 5,
				quantity: 1,
                link: "Precious Numismatics/Images/Архистратиг Михаил.pdf",
                img: "Precious Numismatics/Images/Архистратиг Михаил.png",
                alt: "Монета 5",
                name: "Архістратиг Михаїл",
                price: "2 290 грн"
            },
            {
                id: 6,
				quantity: 1,
                link: "Precious Numismatics/Images/Morgan.pdf",
                img: "Precious Numismatics/Images/Morgan.png",
                alt: "Монета 6",
                name: "<br>Morgan",
                price: "2 160 грн"
            },
            {
                id: 7,
				quantity: 1,
                link: "Precious Numismatics/Images/Walking Liberty.pdf",
                img: "Precious Numismatics/Images/Walking Liberty.png",
                alt: "Монета 7",
                name: "<br>Walking Liberty",
                price: "1 800 грн"
            },
			{
                id: 8,
				quantity: 1,
                link: "Precious Numismatics/Images/Украинський Борщ.pdf",
                img: "Precious Numismatics/Images/Украинський Борщ.png",
                alt: "Монета 8",
                name: "Український Борщ",
                price: "8 500 грн"
            },
            {
                id: 9,
				quantity: 1,
                link: "Precious Numismatics/Images/Britannia.pdf",
                img: "Precious Numismatics/Images/Britannia.png",
                alt: "Монета 9",
                name: "<br>Britannia",
                price: "2 300 грн"
            },
            {
                id: 10,
				quantity: 1,
                link: "Precious Numismatics/Images/Year Of The Rabbit.pdf",
                img: "Precious Numismatics/Images/Year Of The Rabbit.png",
                alt: "Монета 10",
                name: "Year Of The Rabbit",
                price: "1 200 грн"
            },
            {
                id: 11,
				quantity: 1,
                link: "Precious Numismatics/Images/Red Dragon of Wales.pdf",
                img: "Precious Numismatics/Images/Red Dragon of Wales.png",
                alt: "Монета 11",
                name: "Red Dragon of Wales",
                price: "9 000 грн"
            },
            {
                id: 12,
				quantity: 1,
                link: "Precious Numismatics/Images/Poseidon.pdf",
                img: "Precious Numismatics/Images/Poseidon.png",
                alt: "Монета 12",
                name: "<br>Poseidon",
                price: "4 200 грн"
            },
            {
                id: 13,
				quantity: 1,
                link: "Precious Numismatics/Images/Володимирський Собор.pdf",
                img: "Precious Numismatics/Images/Володимирський Собор.png",
                alt: "Монета 13",
                name: "Володимирський Собор",
                price: "24 000 грн"
            },
            {
                id: 14,
				quantity: 1,
                link: "Precious Numismatics/Images/Noahs Ark.pdf",
                img: "Precious Numismatics/Images/Noahs Ark.png",
                alt: "Монета 14",
                name: "<br>Noah’s Ark",
                price: "1 600 грн"
            },
            {
                id: 15,
				quantity: 1,
                link: "Precious Numismatics/Images/Морський Коник.pdf",
                img: "Precious Numismatics/Images/Морський Коник.png",
                alt: "Монета 15",
                name: "<br>Морський Коник",
                price: "10 500 грн"
            },
        ],
        cartOfProducts: [],
		cartOfFavorites: [],
        newsItems: [
            {
                id: 16,
                link: "Precious Numismatics/Images/Украина - Земля Свободи.pdf",
                img: "Precious Numismatics/Images/Украина - Земля Свободи.png",
                alt: "Новина 1",
                title: "Україна - Земля Свободи",
                description: 'Нова срібна монета "Ukraine The Land Of Freedom" — символ незалежності и гордості України!'
            },
            {
                id: 17,
                link: "Precious Numismatics/Images/Gun & Rod.pdf",
                img: "Precious Numismatics/Images/Gun & Rod.png",
                alt: "Новина 2",
                title: "<br>Зброя та Вудка",
                description: 'Срібний "Gun & Rod": ідеальний трофей для справжніх поціновувачів!'
            },
            {
                id: 18,
                link: "Precious Numismatics/Images/Сад божественних писень.pdf",
                img: "Precious Numismatics/Images/Сад божественних писень.png",
                alt: "Новина 3",
                title: "Сад божествених пісень",
                description: 'Срібна монета НБУ "Сад божественних пісень": вшанування Г. Сковороди.'
            }
        ]
    },
	methods: {
	openProductLink(link) {
      window.open(link, '_blank'); 
    },

	closePage() {
      window.close();
    },
	loadUserData() {
	   
		return {
			email: localStorage.getItem('userEmail'),
			username: localStorage.getItem('username')
		};
	},
	sendOrderEmail() {
            const { email, username } = this.loadUserData();
            if (!email || !username) {
                showMessage('Будь ласка, авторизуйтесь для надсилання замовлення');
                return;
            }

            const productsList = this.cartOfProducts.map(product => {
                return `ID: ${product.id}, Назва: ${product.name}, Кількість: ${product.quantity}, Ціна: ${product.price}`;
            }).join('\n');

            const subject = 'Замовлення з сайту';
            const body = `Ім'я: ${username}\nEmail: ${email}\n\nЗамовлення:\n${productsList}\n\nЗагальна сума: ${this.calculateTotalPrice()} грн\nВсього предметів: ${this.calculateTotalQuantity()}`;

            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        },
	calculateTotalQuantity() {
      return this.cartOfProducts.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
calculateTotalPrice() {
  return this.cartOfProducts.reduce((total, product) => {
    const price = parseInt(product.price.replace(/\D/g, ''), 10);
    const totalPriceForProduct = price * product.quantity;
    return total + totalPriceForProduct;
  }, 0);
},

	countProducts: function() {
		return this.cartOfProducts.length;
	},
	countFavorites: function() {
		return this.cartOfFavorites.length;
	},
	clearCart() {
		this.cartOfProducts = [];
		localStorage.removeItem('cart');
		showMessage("Корзина очищена");
    },
	clearFavorites() {
		this.cartOfFavorites = [];
		localStorage.removeItem('favorite');
		showMessage("Список обраних товарів стерт");
    },
	openProductLink(url) {
        let productNewTab = window.open(); 
        productNewTab.location.href = url;
    },
    addProductToCart(product) {
    if (!isUserAuthorized()) {
      showMessage('Для того, щоб додати товар у корзину, будь ласка, спочатку авторизуйтесь');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.some(item => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartOfProducts = cart;
      showMessage('Товар додано в корзину');
    } else {
      showMessage('Цей товар вже знаходиться в корзині');
    }
  },
    clearProductsFromCart() {
        this.cartOfProducts.splice(0, this.cartOfProducts.length);
        localStorage.setItem('cart', JSON.stringify(this.cartOfProducts));
    },
	
    addProductToFavorites(product) {
	if (!isUserAuthorized()) {
      showMessage('Для того, щоб додати товар до обраного, будь ласка, спочатку авторизуйтесь');
      return;
    }
        let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        if (!favorite.some(item => item.id === product.id)) {
            favorite.push(product);
            localStorage.setItem('favorite', JSON.stringify(favorite));
            this.cartOfFavorites = favorite;
            showMessage('Товар додано в обране');
        } else {
            showMessage('Цей товар вже знаходиться в обраному');
        }
    },
    removeProductFromFavorites(product) {
        const index = this.cartOfFavorites.findIndex(item => item.id === product.id);
        if (index > -1) {
            this.cartOfFavorites.splice(index, 1);
			showMessage('Товар видалено з обраного');
        }
        localStorage.setItem('favorite', JSON.stringify(this.cartOfFavorites));
    },
    removeProductFromCart(product) {
        const index = this.cartOfProducts.findIndex(item => item.id === product.id);
        if (index > -1) {
            this.cartOfProducts.splice(index, 1);
			showMessage('Товар видалено з корзини');
        }
        localStorage.setItem('cart', JSON.stringify(this.cartOfProducts));
    },
	    removeProductFromOrder(product) {
        const index = this.cartOfProducts.findIndex(item => item.id === product.id);
        if (index > -1) {
            this.cartOfProducts.splice(index, 1);
			showMessage('Товар видалено з замовлення');
        }
        localStorage.setItem('cart', JSON.stringify(this.cartOfProducts));
    },
},
created() {
    const productId = parseInt(window.location.href.split('?id=')[1]);
    console.log("Product ID:", productId);
    if (productId > 4) {
        this.currentProduct = this.forSaleProducts.find(product => product.id === productId);
    } else {
        this.currentProduct = this.popularProducts.find(product => product.id === productId);
    }
    console.log("Current Product:", this.currentProduct);
},




mounted() {
    document.querySelectorAll('[id^="menu"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();

            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', this.loadReviews);
    var men = document.getElementById('men');
    men.style.display = 'none';
    
    this.cartOfProducts = JSON.parse(localStorage.getItem('cart')) || []
	this.cartOfFavorites = JSON.parse(localStorage.getItem('favorite')) || []
	this.cartOfProducts.forEach(product => {
    product.quantity = 1;
});
}
});