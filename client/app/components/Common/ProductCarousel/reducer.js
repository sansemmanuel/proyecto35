const initialState = {
    products: [], // Cambia el nombre a products
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
            };
        // Otros casos y lógica según tus necesidades
        default:
            return state;
    }
};

export default productsReducer;
