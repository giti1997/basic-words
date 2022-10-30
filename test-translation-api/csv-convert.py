import pandas as pd

f = open("hello.out", "r")
a = []
s = f.readline()[:-1]
while s:
    a.append(s)
    s = f.readline()[:-1]

import ast
dic = open("lan-dict.json", "r")
lang_string = dic.read()
dic.close()
lang = ast.literal_eval(lang_string)

df = pd.DataFrame([lang.keys(), lang.values(), a])
df.columns = df.iloc[0]
df = df.drop(index = 0)
df.index = df["English"]
df.index.set_names("Words",inplace=True)
df = df.rename(index={"en":"code"})

df.to_csv('hello.csv',index = False)