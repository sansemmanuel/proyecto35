const fetchProductsSuccess = products => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
});

const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await fetch('/api/product');
            const data = await response.json();

            dispatch(fetchProductsSuccess(data)); // Aquí usas fetchProductsSuccess
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};
