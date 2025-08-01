import type { DeepReadonly, UnwrapNestedRefs } from 'vue'
import type { ShowErrorProps } from '~/types/base'

/**
 * Приводит полученные с бэкенда данные к типу, исключающему `null` и `undefined`,
 * и возвращает объект только для чтения (`readonly`).
 *
 * Используется как safeguard — если бэкенд вернёт `null` или `undefined`,
 * будет выброшена ошибка и отображена фатальная страница. Это защищает от случайной отрисовки
 * компонента с отсутствующими данными при успешном (200 OK) ответе сервера.
 *
 * @param {T} data - Данные, полученные от API. Могут быть `null` или `undefined`.
 * @returns {DeepReadonly<UnwrapNestedRefs<NonNullable<T>>>}
 * Гарантированно непустой (`NonNullable`), вложенно реактивный (`UnwrapNestedRefs`)
 * и рекурсивно только для чтения (`DeepReadonly`) объект.
 *
 * @throws {Error} Если `data === null` или `data === undefined`.
 *
 * @example
 * const {data} = awair useApi('/user')
 * const user = useExpectFetchData(data.value)
 * // user точно не null, и доступ к полям будет только для чтения
 */
export const useExpectDataFetch = <T>(data: T, errorData?: ShowErrorProps): DeepReadonly<UnwrapNestedRefs<NonNullable<T>>> => {
    if (data === null) {
        showError({
            data: errorData ? errorData : {}
        })
    }
    // мы уверены что тип data не null
    return readonly(data!)
}