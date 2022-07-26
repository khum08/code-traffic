import {createStore, createLogger} from 'vuex';
import traffic from './traffic';


const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        traffic
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})