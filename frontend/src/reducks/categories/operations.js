import API from '../../API';
import { getCategoriesAction } from './actions';

const api = new API();

export const getCategories = () => {
    return async dispatch => {
        return await api
            .getCategories()
            .then(res => {
                dispatch(getCategoriesAction(res));
            })
            .catch(err => {
                console.log(err);
            })
    }
}