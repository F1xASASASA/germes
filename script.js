document.addEventListener('DOMContentLoaded', function() {

    // Слайдер Проектов
    const projectsSlider = new Swiper('.projects-slider', {
        loop: true,
        slidesPerView: 3, // Показываем 3 на десктопе
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: '.projects-pagination', // Используем кастомный класс
            clickable: true,
        },
         breakpoints: {
            0: { // Мобильные
              slidesPerView: 1.2, // Показываем чуть больше одного
              spaceBetween: 15,
              centeredSlides: true, // Центрируем активный
              loop: false, // На мобильных лучше без цикла при centeredSlides
            },
            768: { // Планшеты
              slidesPerView: 2.3, // Показываем 2 и кусочек
              spaceBetween: 20,
              centeredSlides: false,
               loop: true,
            },
            992: { // Десктопы
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
               loop: true,
            }
         }
    });

    // Слайдер Брендов
    const brandsSlider = new Swiper('.brands-slider', {
        loop: true,
        slidesPerView: 7, // Количество видимых логотипов на десктопе
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.brands-prev',
            prevEl: '.brands-prev',
        },
        breakpoints: {
            0: { slidesPerView: 3, spaceBetween: 15 }, // Мобильные
            576: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 25 }, // Планшеты
            992: { slidesPerView: 6, spaceBetween: 30 },
            1200: { slidesPerView: 7, spaceBetween: 30 } // Большие десктопы
        }
    });

    // Обработчики для НЕРАБОЧИХ кнопок/ссылок (имитация)
    const nonWorkingElements = document.querySelectorAll(
        '.btn-bottom-order, .btn-one-click, .btn-cart, .btn-checkmark, .btn-cart-small, .btn-favorite, .category-menu a, .main-menu a, .promo-link, .search-form, .footer-column ul a, .btn-catalog, .link-arrow, .header-icon-link, .callback-link' // Добавлены новые селекторы шапки
    );

    nonWorkingElements.forEach(element => {
        if (element.tagName === 'FORM') {
             element.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Функция поиска временно недоступна.');
            });
        }
        else {
            element.addEventListener('click', function(e) {
                // Разрешаем переход по ссылкам в футере и меню (можно убрать если надо)
                // Убрал разрешение для main-menu, т.к. они тоже ведут в никуда
                 const isRealLink = element.closest('.footer-column ul');

                // Исключаем клики по ссылкам внутри карточек товаров, если они должны куда-то вести
                const isProductLink = element.closest('.product-title a, .product-image-link');

                if (!isRealLink && !isProductLink) {
                     e.preventDefault();
                     // Можно добавить более специфичные сообщения для разных кнопок
                     if (element.classList.contains('btn-catalog')) {
                        alert('Меню каталога в данной копии не реализовано.');
                     } else if (element.closest('.header-icon-link, .btn-favorite, .btn-cart, .btn-cart-small')) {
                         alert('Функции избранного/корзины/сравнения не работают.');
                     } else if (element.classList.contains('btn-one-click') || element.classList.contains('btn-bottom-order') || element.classList.contains('callback-link') ) {
                          alert('Функция заказа не работает в этой копии.');
                     }
                     else {
                        alert('Извините, эта функция/ссылка не активна в данной статической копии сайта.');
                     }
                }
            });
        }
    });

     // Убедимся что кнопка каталога - button
     const catalogBtn = document.querySelector('.btn-catalog');
     if (catalogBtn) {
         catalogBtn.type = 'button';
     }

});