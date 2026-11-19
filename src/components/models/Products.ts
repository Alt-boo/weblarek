import { IProduct } from '../../types';

/**
 * Модель каталога товаров.
 * Отвечает за хранение массива всех товаров и выбранного для просмотра товара.
 */
export class Products {
    private items: IProduct[] = [];
    private preview: IProduct | null = null;

    /** Сохранить массив товаров */
    setItems(items: IProduct[]): void {
        this.items = items;
    }

    /** Получить массив товаров */
    getItems(): IProduct[] {
        return this.items;
    }

    /** Получить товар по id */
    getItem(id: string): IProduct | undefined {
        return this.items.find(item => item.id === id);
    }

    /** Сохранить товар для подробного отображения */
    setPreview(item: IProduct): void {
        this.preview = item;
    }

    /** Получить товар для подробного отображения */
    getPreview(): IProduct | null {
        return this.preview;
    }
}