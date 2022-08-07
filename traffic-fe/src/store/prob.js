import probApi from '../api/carAndRoadProb'
import allVehiclesApi from "../api/allVehicles";


const state = {
    carColumns: [
        {
            title: "Car Type",
            dataIndex: "name",
            key: "CarType",
        },
        {
            title: 'Probability',
            dataIndex: "number",
            key: "probability"
        },
    ],
    roadColumns: [
        {
            title: "Road Type",
            dataIndex: "name",
            key: "RoadType",
        },
        {
            title: 'Probability',
            dataIndex: "number",
            key: "probability"
        },
    ],
    carData: [],
    roadData: [],
    carType: {}
}

const getData = (state, getters, rootState, type, shouldMap) => {
    const objData = state[type][rootState.traffic.selectedYear];
    const r = Object.keys(objData).map(key => {
        return {
            key: key,
            name: shouldMap ? state.carType[key] : key,
            number: objData[key][0] * 100 / objData[key][1]
        }
    })
    return r;
}

const getters = {
    carData: (state, getters, rootState) => {
        return getData(state, getters, rootState, 'carData', true);
    },

    roadData: (state, getters, rootState) => {
        return getData(state, getters, rootState, 'roadData');
    }
}

const actions = {
    initData: ({commit}) => {
        const carData = probApi.getCarProb();
        const roadData = probApi.getRoadProb();
        const carType = allVehiclesApi.getTypeOfCar();
        commit('setCarData', carData);
        commit('setRoadData', roadData);
        commit('setCarType', carType);
    }
}

const mutations = {
    setCarData: function(state, data) {
        state.carData = data;
    },

    setRoadData: function(state, data) {
        state.roadData = data;
    },

    setCarType: function(state, data) {
        state.carType = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}