from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/words/")
async def get_words(language: str = "English"):
    import pandas as pd
    df = pd.read_csv('hello.csv')
    check = False
    for column in df:
        if language == column:
            check = True
            break
    if check == False:
        return {"message": "Language not Found!"}
    return df[language]
#    i = 0
#    for x in df["English"]:
#        if x == text:
#            return df.iloc[i][target]
#        i = i+1
#    return "Error text!"
