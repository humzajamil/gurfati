import * as api from '../../api';
import {PROPERTY_TYPES} from '../actionTypes';

export const propertyTypes = () => async dispatch => {
  console.log('propertyTypes action triggered **************');
  try {
    const {data} = await api.propertyTypes();
    console.log(data, 'from action');
    dispatch({type: PROPERTY_TYPES, payload: data});
  } catch (error) {
    console.log(error);
  }
};
