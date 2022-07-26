import vehiclesApi from "../api/vehicles";

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
          title: "Probability",
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
        const data = Object.keys(objData).map(key => {
            return {
                key: key + '',
                name: state.typeOfVehicle[key],
                probability: objData[key]
            }
        });
        return data;
    }
}

const actions = {
    async getVehicles({commit}) {
        const typeOfVehicle = vehiclesApi.getTypeOfVehicle();
        commit('setTypeOfVehicle', typeOfVehicle)
        const vehicles = await vehiclesApi.getVehicles();
        commit('setVehicles', vehicles);
        const d = Object.keys(vehicles);
        const options = d.map(item => {
            return {label: item, value: item}
        });
        commit('setYearList', options);
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}