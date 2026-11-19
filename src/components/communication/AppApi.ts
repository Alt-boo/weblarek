import { IApi, IProductsResponse, IOrderPayload, IOrderResponse } from '../../types';

/**
 * Класс коммуникации с сервером.
 * Использует IApi для получения товаров и отправки заказа.
 */
export class AppApi {
    constructor(private api: IApi) {}

    /** Получить каталог товаров с сервера */
    getProducts(): Promise<IProductsResponse> {
        return this.api.get<IProductsResponse>('/product/');
    }

    /** Отправить заказ на сервер */
    createOrder(data: IOrderPayload): Promise<IOrderResponse> {
        return this.api.post<IOrderResponse>('/order/', data);
    }
}