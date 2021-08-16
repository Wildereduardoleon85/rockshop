import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS
} from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/v1/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})

}