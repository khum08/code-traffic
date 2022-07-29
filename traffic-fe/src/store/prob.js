import probApi from '../api/carAndRoadProb'

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
}

const getData = (state, getters, rootState, type) => {
    const objData = state[type][rootState.traffic.selectedYear];
    const r = Object.keys(objData).map(key => {
        return {
            key: key,
            name: key,
            number: objData[key][0] * 100 / objData[key][1]
        }
    })
    return r;
}

const getters = {
    carData: (state, getters, rootState) => {
        return getData(state, getters, rootState, 'carData');
    },

    roadData: (state, getters, rootState) => {
        return getData(state, getters, rootState, 'roadData');
    }
}

const actions = {
    initData: ({commit}) => {
        const carData = probApi.getCarProb();
        const roadData = probApi.getRoadProb();
        commit('setCarData', carData);
        commit('setRoadData', roadData);
    }
}

const mutations = {
    setCarData: function(state, data) {
        state.carData = data;
    },

    setRoadData: function(state, data) {
        state.roadData = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}