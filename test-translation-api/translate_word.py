import pandas as pd
def get_languages():
    df = pd.read_csv('hello.csv')
    for (i,c) in enumerate(df):
        if i != "Words":
            print(c)

def translate_text(target, text):
    df = pd.read_csv('hello.csv')
    check = False
    for column in df:
        if target == column:
            check = True
            break
    if check == False:
        return "Error language!"
    i = 0
    for x in df["English"]:
        if x == text:
            return df.iloc[i][target]
        i = i+1
    return "Error text!"

print(translate_text("French","Hello!"))
print(translate_text("s","t"))
print(translate_text("Arabic","sdf"))

print(get_languages())