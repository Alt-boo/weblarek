import './scss/styles.scss';

import { API_URL } from './utils/constants';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import { Products } from './components/models/Products';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { AppApi } from './components/communication/AppApi';

/* ---------- Тестирование моделей данных ---------- */

const productsModel = new Products();
const basketModel = new Basket();
const buyerModel = new Buyer();

// Products
productsModel.setItems(apiProducts.items);
console.log('Массив товаров из каталога:', productsModel.getItems());

const firstProduct = apiProducts.items[0];
console.log('Товар по id:', productsModel.getItem(firstProduct.id));

productsModel.setPreview(firstProduct);
console.log('Товар для подробного отображения:', productsModel.getPreview());

// Basket
basketModel.addItem(apiProducts.items[0]);
basketModel.addItem(apiProducts.items[1]);
console.log('Товары в корзине:', basketModel.getItems());
console.log('Стоимость корзины:', basketModel.getTotalPrice());
console.log('Количество товаров в корзине:', basketModel.getCount());
console.log('Товар есть в корзине:', basketModel.hasItem(apiProducts.items[0].id));

basketModel.removeItem(apiProducts.items[0]);
console.log('Товары после удаления:', basketModel.getItems());

basketModel.clear();
console.log('Корзина после очистки:', basketModel.getItems());

// Buyer
buyerModel.setData({ payment: 'card', address: 'Москва, ул. Пушкина, 1' });
buyerModel.setData({ email: 'test@test.ru' });
console.log('Данные покупателя:', buyerModel.getData());
console.log('Ошибки валидации (нет телефона):', buyerModel.validate());

buyerModel.setData({ phone: '+7 (900) 000-00-00' });
console.log('Ошибки валидации (все поля):', buyerModel.validate());

buyerModel.clear();
console.log('Данные покупателя после очистки:', buyerModel.getData());

/* ---------- Работа с сервером ---------- */

const api = new Api(API_URL);
const appApi = new AppApi(api);

appApi.getProducts()
    .then((data) => {
        productsModel.setItems(data.items);
        console.log('Каталог с сервера:', productsModel.getItems());
    })
    .catch((err) => {
        console.error('Ошибка получения каталога:', err);
    });
