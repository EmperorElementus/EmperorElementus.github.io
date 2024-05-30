function showMessage(message, includeUsername = false) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var windowCenterX = windowWidth / 2;
    var windowCenterY = windowHeight / 2;

    var notification = document.createElement('div');
    if (includeUsername) {
        var username = localStorage.getItem('username');
        message += ' ' + username;
    }
    notification.innerHTML = message;
    notification.classList.add('user-select-none');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #121212;
        color: #fff;
        padding: 20px;
        border-radius: 5px;
        z-index: 9999;
        opacity: 0;
        text-align: center;
        max-width: 400px;
        transition: opacity 0.5s ease-in-out;
    `;

    document.body.appendChild(notification);

    setTimeout(function() {
        notification.style.opacity = '1';
    }, 100);

    setTimeout(function() {
        notification.style.opacity = '0';
        setTimeout(function() {
            notification.remove();
        }, 500);
    }, 2000);
}


	document.querySelectorAll('[id^="menu"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
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


function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Регистрация пользователя:', username, email, password);
    saveUserData(email, password, username);
    hideLoginForm();
    console.log('Пользователь зарегистрирован');
}

function hideLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
    console.log('Форма авторизации скрыта');
}

function saveUserData(email, password, username) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('username', username);
    console.log('Данные пользователя сохранены в локальном хранилище');
}

function loadUserData() {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
    const username = localStorage.getItem('username');
    console.log('Данные пользователя загружены из локального хранилища');
    return { email, password, username };
}

function checkLogin() {
    const { email, password, username } = loadUserData();
    if (email && password && username) {
        console.log('Пользователь вошел в систему как:', username);
		showMessage('Ви успішно авторизвувались, як', username);
    } else {
        console.log('Пользователь не вошел в систему');
    }
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    saveUserData(email, password, username);
    checkLogin();
}

function logout() {
	event.preventDefault();
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('username');
    clearInputFields();
    hideLoginForm();
	toggleMenu();
    console.log('Пользователь вышел из системы');
	showMessage('Ви вийшли з системи');
}

function clearInputFields() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    console.log('Поля ввода очищены');
}


function submitReview(event) {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const { email, username } = loadUserData();

    if (!reviewText.trim()) {
        showMessage('Будь ласка, заповніть поле для відгука');
        return;
    }

    if (email && username) {
        const reviewData = {
            email: email,
            username: username,
            review: reviewText
        };
        saveReview(reviewData);
        loadReviews();
        console.log('Данные отзыва сохранены:', reviewData);
		showMessage('Відгук опублікован');
		console.log('Отзыв отправлен');
    } else {
        showMessage('Для того, щоб залишити відгук, будь ласка, спочатку авторизуйтесь');
    }
}


const submitButton = document.createElement('button');
if (submitButton) {
	submitButton.type = 'submit';
	submitButton.textContent = 'Відправити ✉';
	submitButton.id = 'submitReviewButton';
}

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
	reviewForm.appendChild(submitButton);
}

document.addEventListener('DOMContentLoaded', function() {
    var men = document.getElementById('men');
	if (men) {
		men.style.display = 'none';
	}
});

function saveReview(reviewData) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    console.log('Отзыв сохранен в локальном хранилище');
}

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    displayReviews(reviews);
    console.log('Отзывы загружены');
}


function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviewsContainer');
	if (reviewsContainer) {
		reviewsContainer.innerHTML = '';

		reviews.forEach(reviewData => {
			const reviewElement = document.createElement('div');
			reviewElement.classList.add('review');

			const reviewHeader = document.createElement('div');
			reviewHeader.classList.add('reviewHeader');
			const usernameElement = document.createElement('p');
			usernameElement.classList.add('username');
			usernameElement.textContent = reviewData.username;
			reviewHeader.appendChild(usernameElement);

			const reviewBody = document.createElement('div');
			reviewBody.classList.add('reviewBody');
			const reviewText = document.createElement('p');
			reviewText.classList.add('reviewText');
			reviewText.textContent = reviewData.review;
			reviewBody.appendChild(reviewText);

			reviewElement.appendChild(reviewHeader);
			reviewElement.appendChild(reviewBody);

			reviewsContainer.appendChild(reviewElement);
		});
	}
}

function toggleLoginForm() {
	event.preventDefault();
    var form = document.getElementById('loginForm');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        document.getElementById('loginButton').textContent = 'Авторизуватися';
        console.log('Форма авторизации отображена');
    } else {
        form.style.display = 'none';
        console.log('Форма авторизации скрыта');
		toggleMenu();
    }
	toggleMenu();
}

function toggleMenu() {
    var men = document.getElementById('men');
    men.style.display = (men.style.display === 'none') ? 'block' : 'none';
    console.log('Меню переключено');
	toggleCircle(event)
}

function submitForm(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if (document.getElementById('loginButton').textContent === 'Авторизуватися') {
        login(event);
    } else {
        register(event);
    }

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
    toggleLoginForm();
}
function toggleCircle(event) {
    var profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto.style.border === '') {
        profilePhoto.style.border = '2px solid #7CFC00';
        profilePhoto.style.borderRadius = '50%';
    } else {
        profilePhoto.style.border = '';
    }
}

document.addEventListener('DOMContentLoaded', loadReviews);
///localStorage.clear();


function setInitialTheme() {
    var isWhiteTheme = localStorage.getItem("isWhiteTheme");

    if (isWhiteTheme === null) {
        isWhiteTheme = true;
    } else {
        isWhiteTheme = JSON.parse(isWhiteTheme);
    }

    var linkElement = document.getElementById("themeStylesheet");
    var cssPath = isWhiteTheme ? "../Resources/style1.css" : "../Resources/style.css";
    linkElement.setAttribute("href", cssPath);
}

function toggleTheme() {
    var isWhiteTheme = localStorage.getItem("isWhiteTheme");

    if (isWhiteTheme === null) {
        isWhiteTheme = true;
    } else {
        isWhiteTheme = JSON.parse(isWhiteTheme);
    }

    isWhiteTheme = !isWhiteTheme;

    var linkElement = document.getElementById("themeStylesheet");
    var cssPath = isWhiteTheme ? "../Resources/style1.css" : "../Resources/style.css";
    linkElement.setAttribute("href", cssPath);

    localStorage.setItem("isWhiteTheme", JSON.stringify(isWhiteTheme));
}
function toggleMenu1(event) {
    var newnav = document.getElementById('newnav');
    newnav.classList.toggle('hidden');
    console.log('Меню переключено');
    toggleCircle1(event);
}

function toggleCircle1(event) {
    var burger2 = document.getElementById('burger2');
    if (burger2.style.border === '') {
        burger2.style.border = '2px solid #7CFC00';
        burger2.style.borderRadius = '50%';
    } else {
        burger2.style.border = '';
    }
}
setInitialTheme();
function isUserAuthorized() {
  const userData = loadUserData();
  return userData && userData.email && userData.username;
}