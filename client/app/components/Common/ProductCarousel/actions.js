// actions.js

const fetchProductsSuccess = products => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
});

const fetchFeaturedProductsSuccess = featuredProducts => ({
    type: 'FETCH_FEATURED_PRODUCTS_SUCCESS',
    payload: featuredProducts,
});

const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await fetch('/api/product'); // Ajusta la ruta según tu backend
            const data = await response.json();

            dispatch(fetchProductsSuccess(data));

            // Filtra los productos destacados y los almacena en el estado
            // const products = data.filter(products);
            dispatch(fetchFeaturedProductsSuccess(products));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

export default {
    fetchProducts,
};
