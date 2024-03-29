const allVehicles ={
    "2000":{
        "FdPC":1754729,
        "Fd2WMV":4077052,
        "FdCar":296873261,
        "FdBUS":4515936,
        "FdLGV":38823847,
        "FdHGV":22584681
    },
    "2001":{
        "FdPC":1798799,
        "Fd2WMV":4303397,
        "FdCar":301433980,
        "FdBUS":4560027,
        "FdLGV":39714530,
        "FdHGV":22403359
    },
    "2002":{
        "FdPC":1757010,
        "Fd2WMV":4233604,
        "FdCar":305721256,
        "FdBUS":4584000,
        "FdLGV":40234469,
        "FdHGV":22476756
    },
    "2003":{
        "FdPC":2145099,
        "Fd2WMV":4825894,
        "FdCar":313773522,
        "FdBUS":4694081,
        "FdLGV":43398870,
        "FdHGV":22711141
    },
    "2004":{
        "FdPC":1994213,
        "Fd2WMV":4429015,
        "FdCar":317821347,
        "FdBUS":4447793,
        "FdLGV":44954183,
        "FdHGV":23642260
    },
    "2005":{
        "FdPC":2079724,
        "Fd2WMV":4360150,
        "FdCar":316179319,
        "FdBUS":4475325,
        "FdLGV":46289078,
        "FdHGV":23427912
    },
    "2006":{
        "FdPC":2544829,
        "Fd2WMV":4479892,
        "FdCar":319719151,
        "FdBUS":4669639,
        "FdLGV":48611273,
        "FdHGV":23458181
    },
    "2007":{
        "FdPC":2148133,
        "Fd2WMV":4439371,
        "FdCar":315525992,
        "FdBUS":4563388,
        "FdLGV":50794447,
        "FdHGV":23396465
    },
    "2008":{
        "FdPC":2560559,
        "Fd2WMV":4405490,
        "FdCar":325133285,
        "FdBUS":4679232,
        "FdLGV":51663209,
        "FdHGV":23210968
    },
    "2009":{
        "FdPC":2505754,
        "Fd2WMV":4157910,
        "FdCar":315994017,
        "FdBUS":4491906,
        "FdLGV":48700356,
        "FdHGV":21252117
    },
    "2010":{
        "FdPC":2485797,
        "Fd2WMV":3808407,
        "FdCar":306123322,
        "FdBUS":4517601,
        "FdLGV":47593113,
        "FdHGV":21343298
    },
    "2011":{
        "FdPC":2568435,
        "Fd2WMV":3745471,
        "FdCar":306463586,
        "FdBUS":4453387,
        "FdLGV":48854469,
        "FdHGV":20928133
    },
    "2012":{
        "FdPC":2517913,
        "Fd2WMV":3541398,
        "FdCar":305536999,
        "FdBUS":4536014,
        "FdLGV":49375287,
        "FdHGV":20766266
    },
    "2013":{
        "FdPC":2460624,
        "Fd2WMV":3536853,
        "FdCar":304462404,
        "FdBUS":4480771,
        "FdLGV":50547819,
        "FdHGV":20803942
    },
    "2014":{
        "FdPC":2603720,
        "Fd2WMV":3645836,
        "FdCar":308981734,
        "FdBUS":4438550,
        "FdLGV":53484375,
        "FdHGV":21284783
    },
    "2015":{
        "FdPC":2668664,
        "Fd2WMV":3623317,
        "FdCar":312365320,
        "FdBUS":4449601,
        "FdLGV":55550812,
        "FdHGV":21991401
    },
    "2016":{
        "FdPC":3059154,
        "Fd2WMV":3764407,
        "FdCar":316369938,
        "FdBUS":4375958,
        "FdLGV":57292103,
        "FdHGV":21858443
    }
}

const typeOfCar = {
    "FdPC": 'Cycle',
    "Fd2WMV": 'Two wheeled motor vehicles',
    "FdCar": 'Car',
    "FdBUS": 'Bus',
    "FdLGV": 'light goods vehicle',
    "FdHGV": 'heavy goods vehicle'
}

export default {
    getVehicles() {
        return allVehicles;
    },

    getTypeOfCar() {
        return typeOfCar;
    }
}