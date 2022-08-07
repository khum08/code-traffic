import allVehiclesApi from "../api/allVehicles";
import allRoadApi from '../api/allRoads';

const state = () => ({
    allVehicles: {},
    columns: [
        {
          title: "Car Type",
          dataIndex: "name",
          key: "CarType",
        },
        {
            title: 'Total Number',
            dataIndex: "number",
            key: "number"
        },
    ],
    car: {},
    roadsList: {},
    roadColumns: [
        {
            title: "Road Type",
            dataIndex: "name",
            key: "RoadType",
        },
        {
            title: 'Total Number',
            dataIndex: "number",
            key: "number"
        },
    ]
});

const getters = {
    carTypeData: (state, getters, rootState) => {
        const cur = state.allVehicles[rootState.traffic.selectedYear];
        if (!cur) {
            return [];
        }
        const data = Object.keys(cur).map(key => {
            return {
                key: key + '',
                name: state.car[key],
                number: cur[key]
            }
        });
        return data;
    },
    roadTypeData: (state, getters, rootState) => {
        const year = rootState.traffic.selectedYear;
        const matchYear = state.roadsList.filter(t => t['AADFYear'] === Number(year));
        return matchYear.map(t => {
            return {
                key: t['Road_short'],
                name: t['Road_short'],
                number: t['all']
            }
        });
    }
}

const actions = {
    initData({dispatch}) {
        dispatch('getAllVehicles');
        dispatch('getAllRoadsData');
    },

    getAllVehicles({commit}) {
        const vehicles = allVehiclesApi.getVehicles();
        commit('setVehicles', vehicles);

        const car = allVehiclesApi.getTypeOfCar();
        commit('setRoads', car);
    },

    getAllRoadsData({commit}) {
        const roads = allRoadApi.getRoadsData();
        commit('setRoadsData', roads);
    },

    async selectYear({commit}, year) {
        commit('setSelectedYear', year);
    }
}

const mutations = {
    setVehicles(state, allVehicles) {
        state.allVehicles = allVehicles;
    },

    setRoads(state, car) {
        state.car = car;
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