export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

/* Вид оплаты */
export type TPayment = 'card' | 'cash';

/* Товар */
export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

/* Покупатель */
export interface IBuyer {
    payment: TPayment | '';
    email: string;
    phone: string;
    address: string;
}

/* Ответ сервера на запрос каталога товаров */
export interface IProductsResponse {
    total: number;
    items: IProduct[];
}

/* Данные заказа, отправляемые на сервер */
export interface IOrderPayload extends IBuyer {
    total: number;
    items: string[];
}

/* Ответ сервера на оформление заказа */
export interface IOrderResponse {
    id: string;
    total: number;
}

/* Объект ошибки валидации полей покупателя */
export type BuyerErrors = Partial<Record<keyof IBuyer, string>>;