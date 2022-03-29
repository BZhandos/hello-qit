import { IProduct } from '@/@types/calc'

function newID() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
}

export const product = {
    namespaced: true,
    state: () => ({
        productList: [] as IProduct[]
    }),
    mutations: {
        ADD_PRODUCT: (state: any, product: IProduct) => {
            product.id = newID();
            state.productList.push(product)
        },
        REMOVE_PRODUCTS: (state: any, id:  string) => {
            state.productList = state.productList.filter((product: IProduct) => product.id !== id)
        },
    },
    actions: {
        addProduct({ commit }: any, product: IProduct) {
            commit('ADD_PRODUCT', product)
        },
        removeProduct({ commit }: any, id: string) {
            commit('REMOVE_PRODUCTS', id)
        },
    },
    getters: {
        productList: (state: any) => state.productList,
    }
}
