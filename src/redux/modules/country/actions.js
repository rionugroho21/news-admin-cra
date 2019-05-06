import * as types from './types';
import { getCountry } from '../../../models/country';

export function startLoadingRates(){
    return (dispatch) => {
        getCountry().then(res => {
            const country = res.data;
            let rates = '';
            let list = [];
            for(rates in country.rates) {
                list = list.concat(rates);
            }
            dispatch(loadRates(list));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadRates(datas) {
    return {
        type: types.LOAD_RATES,
        datas
    }
}