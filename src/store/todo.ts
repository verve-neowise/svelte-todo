import { writable, readable } from "svelte/store";
import { LIST_NAME } from "../constants/constants";
import type ITodo from "../interfaces/ITodo";

const createList = () => {

    const storage = JSON.parse(window.localStorage.getItem(LIST_NAME) || '[]');

    const { set, subscribe, update } = writable<ITodo[]>(storage)

    return {
        subscribe,
        set: (value: ITodo[]) => {
            changeStorage(value)
            set(value)
        },

        add: (item: ITodo) => {
            update(value => {
                const newValue = [item, ...value]
                changeStorage(newValue)
                return newValue
            })
        },
        remove: (id: number) => {
            update(value => {
                const newValue = value.filter(v => v.id !== id)
                changeStorage(newValue)
                return newValue
            })
        },

        removeAll: () => {
            // remove all elements from local storage
            changeStorage([])
            set([])
        },
    }
}

const changeStorage = (value: ITodo[]) => {
    window.localStorage.setItem(LIST_NAME, JSON.stringify(value))
}

export const list = createList()

