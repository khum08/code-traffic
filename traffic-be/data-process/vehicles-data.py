import pandas as pd
import json


result={}
year=['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
for i in year:
    p='../../raw-data/InputData2/'+i+'/Vehicles_'+i+'.csv'
    print(p)
    df = pd.read_csv(p)
    grouped=df.groupby('Vehicle_Type').count()
    # print(grouped)
    sum=grouped['Vehicle_Reference'].sum()
    # print(sum)
    grouped['percent'] = grouped.apply(lambda x: x['Vehicle_Reference'] / sum, axis=1)
    # print(i + ':')
    data=pd.DataFrame(grouped, columns=['Vehicle_Reference', 'percent'])
    print(data)
    result[i] = data.to_dict()
print(json.dumps(result))
