module.exports = {
    ROUTES: {
        LOGIN: '/login',
        REGISTER: '/register',
        AUTH: '/authenticate',
        PRODUCTS: {
            FETCH: '/products/fetch',
            ADD: '/products/add',
            DELETE: '/products/delete',
            FETCHONE: '/products/fetchone'
        },
        ORDER: {
            ADD: '/order/add',
            FETCH: '/order/fetch',
        },
        CART: {
            ADD: '/cart/add',
            FETCH: '/cart/fetch',
            DELETE: '/cart/delete',
            UPDATE: '/cart/update'
        }
    }
}
