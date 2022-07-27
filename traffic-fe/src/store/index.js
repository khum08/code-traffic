import {createStore, createLogger} from 'vuex';
import traffic from './traffic';
import allTraffic from './allTraffic';


const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        traffic,
        allTraffic
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})