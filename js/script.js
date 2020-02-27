//Восстановить порядок в меню, добавить пятый пункт

let menuItem = document.querySelectorAll('.menu-item');
let parent = document.querySelector('.menu');

parent.insertBefore(menuItem[2], menuItem[1]);

let elem5 = document.createElement("li");
elem5.className = 'menu-item';
elem5.textContent = 'Пятый пункт';
parent.appendChild(elem5);

//Заменить картинку заднего фона на другую из папки img

let BgImage = document.querySelector('body');
console.log(BgImage);
BgImage.style.backgroundImage = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы

document.querySelector('.adv').remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let asc = prompt('Как вы относитесь к технике Apple?');

document.querySelector('#prompt').textContent = asc;

