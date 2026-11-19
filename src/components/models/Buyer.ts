import { IBuyer, IBuyerErrors } from '../../types';

/**
 * Модель покупателя.
 * Хранит данные покупателя: вид оплаты, адрес, телефон, email.
 */
export class Buyer {
    private data: IBuyer = {
        payment: '',
        email: '',
        phone: '',
        address: ''
    };

    /** Сохранить произвольные данные покупателя (частичное обновление) */
    setData(data: Partial<IBuyer>): void {
        this.data = { ...this.data, ...data };
    }

    /** Получить все данные покупателя */
    getData(): IBuyer {
        return { ...this.data };
    }

    /** Очистить данные покупателя */
    clear(): void {
        this.data = {
            payment: '',
            email: '',
            phone: '',
            address: ''
        };
    }

    /**
     * Валидация данных покупателя.
     * Возвращает объект с сообщениями об ошибках по полям, у которых есть проблемы.
     */
    validate(): IBuyerErrors {
        const errors: IBuyerErrors = {};

        if (!this.data.payment) {
            errors.payment = 'Не выбран вид оплаты';
        }
        if (!this.data.address.trim()) {
            errors.address = 'Укажите адрес доставки';
        }
        if (!this.data.email.trim()) {
            errors.email = 'Укажите email';
        }
        if (!this.data.phone.trim()) {
            errors.phone = 'Укажите телефон';
        }

        return errors;
    }
}