import vehiclesApi from "../api/vehicles";
import roadApi from '../api/roads';

const state = () => ({
    typeOfVehicle: {},
    vehicles: {},
    yearList: [],
    selectedYear: 0,
    columns: [
        {
          title: "CarType",
          dataIndex: "name",
          key: "CarType",
        },
        {
            title: 'Number',
            dataIndex: "number",
            key: "number"
        },
        {
          title: "Percent",
          dataIndex: "probability",
          key: "probability",
        },
    ],
    roadsList: {},
    typeOfRoad: {},
    roadColumns: [
        {
            title: "RoadType",
            dataIndex: "name",
            key: "RoadType",
          },
          {
            title: 'Number',
            dataIndex: "number",
            key: "number"
        },
          {
            title: "Percent",
            dataIndex: "probability",
            key: "probability",
          },
    ]
});

const getters = {
    carTypeData: (state) => {
        const cur = state.vehicles[state.selectedYear];
        if (!cur) {
            return [];
        }
        const objData = cur['percent'];
        const numberData = cur['Vehicle_Reference'];
        const data = Object.keys(objData).map(key => {
            return {
                key: key + '',
                name: state.typeOfVehicle[key],
                number: numberData[key],
                probability: objData[key]
            }
        });
        return data;
    },
    roadTypeData: state => {
        const cur = state.roadsList[state.selectedYear];
        if (!cur) {
            return [];
        }
        const objData = cur['percent'];
        const numberData = cur['Accident_Index'];
        const data = Object.keys(objData).map(key => {
            return {
                key: key + '',
                name: state.typeOfRoad[key],
                number: numberData[key],
                probability: objData[key]
            }
        });
        return data;
    }
}

const actions = {
    initData({dispatch}) {
        dispatch('getVehicles');
        dispatch('getRoadsData');
    },

    getVehicles({commit}) {
        const typeOfVehicle = vehiclesApi.getTypeOfVehicle();
        commit('setTypeOfVehicle', typeOfVehicle)
        const vehicles = vehiclesApi.getVehicles();
        commit('setVehicles', vehicles);
        const d = Object.keys(vehicles);
        const options = d.map(item => {
            return {label: item, value: item}
        });
        commit('setYearList', options);
        commit('setSelectedYear', options[0].value);
    },

    getRoadsData({commit}) {
        const typeOfRoad = roadApi.getTypeOfRoad();
        commit('setTypeOfRoad', typeOfRoad);
        const roads = roadApi.getRoadsData();
        commit('setRoadsData', roads);
    },

    async selectYear({commit}, year) {
        commit('setSelectedYear', year);
    }
}

const mutations = {
    setVehicles(state, vehicles) {
        state.vehicles = vehicles;
    },

    setTypeOfVehicle(state, type) {
        state.typeOfVehicle = type;
    },

    setYearList(state, options) {
        state.yearList = options;
    },

    setSelectedYear(state, year) {
        state.selectedYear = year;
    },

    setRoadsData(state, data) {
        state.roadsList = data;
    },

    setTypeOfRoad(state, typeOfRoad) {
        state.typeOfRoad = typeOfRoad
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}