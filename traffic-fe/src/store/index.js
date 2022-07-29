import {createStore, createLogger} from 'vuex';
import traffic from './traffic';
import allTraffic from './allTraffic';
import prob from './prob';


const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        traffic,
        allTraffic,
        prob
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})