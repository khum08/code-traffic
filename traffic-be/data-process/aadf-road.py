import pandas as pd
import json


def pro(p, p2):
    
    df = pd.read_csv(p)
    df2 = pd.read_csv(p2)
    df=pd.concat([df, df2])
    df['Road_short'] = df.apply(lambda x: str.upper(x['Road'][0]), axis=1)
    grouped=df.groupby(['AADFYear', 'Road_short']).sum()
    grouped=df.groupby(['AADFYear', 'Road_short']).sum().reset_index()
    # print(grouped)
    data=pd.DataFrame(grouped, columns=['AADFYear','Road_short','FdPC', 'FdAll_MV'])
    data['all']=data.apply(lambda x: x['FdPC'] + x['FdAll_MV'], axis=1)
    return data

p='../../raw-data/InputData2/Traffic/AADF-data-major-roads.csv'
p2='../../raw-data/InputData2/Traffic/AADF-data-minor-roads.csv'


data=pro(p, p2)
print(data)
print(json.dumps(data.to_dict(orient='records')))