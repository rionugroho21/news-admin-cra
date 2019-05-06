import * as types from './types';
import { getCountry } from '../../../models/country';

export function startLoadingRates(){
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            getCountry().then(result => {
                if(result.status === 200){
                    const country = result.data;
                    let rates = '';
                    let list = [];
                    for(rates in country.rates) {
                        list = list.concat(rates);
                    }
                    dispatch(loadRates(list));
                    resolve(result);
                }else{
                    reject(result)
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
}

export function loadRates(datas) {
    return {
        type: types.LOAD_RATES,
        datas
    }
}