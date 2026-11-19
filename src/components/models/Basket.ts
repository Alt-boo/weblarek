import { IProduct } from '../../types';

/**
 * Модель корзины.
 * Хранит массив товаров, выбранных покупателем для покупки.
 */
export class Basket {
    private items: IProduct[] = [];

    /** Получить массив товаров в корзине */
    getItems(): IProduct[] {
        return this.items;
    }

    /** Добавить товар в корзину */
    addItem(item: IProduct): void {
        this.items.push(item);
    }

    /** Удалить товар из корзины */
    removeItem(item: IProduct): void {
        this.items = this.items.filter(product => product.id !== item.id);
    }

    /** Очистить корзину */
    clear(): void {
        this.items = [];
    }

    /** Получить суммарную стоимость товаров в корзине */
    getTotalPrice(): number {
        return this.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
    }

    /** Получить количество товаров в корзине */
    getCount(): number {
        return this.items.length;
    }

    /** Проверить наличие товара в корзине по id */
    hasItem(id: string): boolean {
        return this.items.some(item => item.id === id);
    }
}