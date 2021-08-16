import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS
} from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/v1/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
}

export const getProductDetails = (id) => async (dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST})
    const {data} = await axios.get(`/api/v1/products/${id}`);
    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
}