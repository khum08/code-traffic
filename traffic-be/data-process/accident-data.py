import pandas as pd
import json

print('start')
result={}
year=['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
for i in year:
    p='../../raw-data/InputData2/'+i+'/Accidents_'+i+'.csv'
    print(p)
    df = pd.read_csv(p)
    grouped=df.groupby('1st_Road_Class').count()
    print(grouped)
    sum=grouped['Accident_Index'].sum()
    # print(sum)
    grouped['percent'] = grouped.apply(lambda x: x['Accident_Index'] / sum, axis=1)
    # print(i + ':')
    data=pd.DataFrame(grouped, columns=['Accident_Index', 'percent'])
    print(data)
    result[i] = data.to_dict()
print(json.dumps(result))


