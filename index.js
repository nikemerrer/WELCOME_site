// Массив данных для слайдов
const slidesData = [
    {
        backgroundImage: "/10e4f2ff11a357f19e078795f6fd4827.png",
        MainText: `<p>В 2018 году знаменитый боец ММА Джефф Монсон получил российское гражданство. Сейчас он открывает спортивные школы, тренирует детей и занимается другой общественной работой.</p>
        <p>«Я открыл 27 бесплатных учебных центров в Уфе, в Башкортостане. Они все абсолютно бесплатные, там занимаются грэпплингом и джиу-джитсу. Правительство нас поддерживает, и я хочу открыть тысячу школ в регионе», — сказал Монсон.</p>`,
        PhotoSource: "",
        name: "Джефф Монсон",
        profession: "Боец ММА",
        link_text: "championat",
        backgroundPosition: "70% 50%",
    },
    {
        backgroundImage: "/66f059cf9dd40fe8a37d13f80ca2e894.png",
        MainText: `                                <p>
                                    В 2014 году российский паспорт получил греческий дирижер Теодор Курентзис, который живет в России больше 20 лет. В 2011-2019 годах маэстро был художественным руководителем Пермского театра оперы и балета, кроме того, он основал и руководит в стране оркестром и хором musicAeterna.
                                </p>

                                <p>
                                    В апреле 2023 года известный дирижер и художественный руководитель пермского Дягилевского фестиваля Теодор Курентзис получил звание почетного профессора Московской государственной консерватории имени П. И. Чайковского.
                                </p>`,
        PhotoSource: "фото — Антон Завьялов",
        name: "Теодор Курентзис",
        profession: "Дирижёр",
        link_text: "newsko",
        backgroundPosition: "60% 40%",

    },
    {
        backgroundImage: "/e529f38dc0e498288255286d9abb3b73.png",
        MainText: `<p>
                                    Пол Кэрролл – шеф-повар родом из Ирландии. Свою карьеру он начал в ресторане знаменитого Гордона Рамзи с тремя звездами «Мишлен», где проработал семь лет. Также Пол Кэрролл работал в Лондоне, Дублине, Нью-Йорке, Дубае, а последние несколько лет живет в России и готовит в собственном ресторане «Полли» во Владимире.                                
                                </p>`,
        PhotoSource: "фото — openkitchen.eda.yandex  ",
        name: "Пол Кэрролл",
        profession: "Шеф-повар",
        link_text: "vdnh",
        backgroundPosition: "25% 80%",

    },
    {
        backgroundImage: "/cab830ad4d712e900cf659d20842952c.jpg",
        MainText: `                                <p>
                                    В 2016 году российское гражданство получил Стивен Сигал, также он является специальным представителем МИД РФ по гуманитарным связям с США и Японией.
                                </p>

                                <p>
                                    «В России меня ничего не удивляет, а самое прекрасное в ней — это люди», — сказал актер.
                                </p>

                                <p>
                                    В феврале 2023 года президент РФ Владимир Путин подписал указ о награждении Стивена Сигала орденом Дружбы за большой вклад в развитие международного культурно-гуманитарного сотрудничества.
                                </p>`,
        PhotoSource: " фото — Андрей Савельев",
        name: " Стивен Сигал",
        profession: "Специальный представитель МИД РФ по гуманитарным связям с США и Японией",
        link_text: "volga.news",
        backgroundPosition: "55% 80%",

    },
];


let currentIndex = 0;

// Элементы DOM
const backgroundImagePhone = document.querySelector(".background_poppip_phone");
const BigTextPhone = document.querySelector(".poppip_phone_big_top_text");
const PhotoSourcePhone = document.querySelector(".poppip_phone_photo_source");
const PersonNamePhone = document.querySelector(".person_name_poppip_name");
const PersonProfPhone = document.querySelector(".person_name_poppip_prof");
const NameLinkPhone = document.querySelector(".poppip_phone_name_link a");




// Функция для обновления слайда
function updateSlide(index) {
    const slide = slidesData[index];

    // Обновляем фон
    backgroundImagePhone.style.backgroundImage = `url(${slide.backgroundImage})`;
    backgroundImagePhone.style.backgroundPosition = slide.backgroundPosition;

    // Обновляем текст
    BigTextPhone.innerHTML = slide.MainText;
    PhotoSourcePhone.textContent = slide.PhotoSource;
    PersonNamePhone.textContent = slide.name;
    PersonProfPhone.textContent = slide.profession;
    NameLinkPhone.textContent = slide.link_text;
}


// Обработчики кнопок
document.querySelector(".strel_right_phone").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slidesData.length; // Переход к следующему слайду
    updateSlide(currentIndex);
});

document.querySelector(".strel_left_phone").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length; // Переход к предыдущему слайду
    updateSlide(currentIndex);
});

let index = 0;
const popular_pip = document.querySelectorAll('.popular_pip');
const prevButtons = document.querySelectorAll('.strel_left');
const nextButtons = document.querySelectorAll('.strel_right');

// Функция для отображения слайда
function slidePOPPIP(newIndex) {
    if (newIndex < 0) newIndex = popular_pip.length - 1; // Зацикливание назад
    if (newIndex >= popular_pip.length) newIndex = 0; // Зацикливание вперед
    
    popular_pip[index].classList.remove('active');
    index = newIndex;
    popular_pip[index].classList.add('active');
}

// Добавление событий на кнопки "Назад" и "Вперед"
prevButtons.forEach(button => {
    button.addEventListener('click', () => slidePOPPIP(index - 1));
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => slidePOPPIP(index + 1));
});

// Инициализация первого слайда
updateSlide(currentIndex);

let slider_index = 0;
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelectorAll('.pagination span');

function showSlide(newIndex) {
    slides[slider_index].classList.remove('active');
    pagination[slider_index].classList.remove('active');
    slider_index = newIndex;
    slides[slider_index].classList.add('active');
    pagination[slider_index].classList.add('active');
}

pagination.forEach((button, i) => {
    button.addEventListener('click', () => showSlide(i));
});



