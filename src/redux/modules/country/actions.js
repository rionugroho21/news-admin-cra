import axios from 'axios';
import * as types from './types';

export function startLoadingRates(){
    return (dispatch) => {
        return axios.get('http://country.io/names.json')
        .then(res => {
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