// featuredProductsReducer.js

const initialState = {
    featuredProducts: [],
};

const featuredProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FEATURED_PRODUCTS_SUCCESS':
            return {
                ...state,
                featuredProducts: action.payload,
            };
        // Otros casos y lógica según tus necesidades
        default:
            return state;
    }
};

export default featuredProductsReducer;
