from fastapi import FastAPI

from google.cloud import bigquery

import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../genuine-essence-364222-54dfa19feae0.json"
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../genuine-essence-364222-e5a8b39d8c83.json"

app = FastAPI()

# Construct a BigQuery client object.
client = bigquery.Client()
#set table_id
table_id = "genuine-essence-364222.basic_words.words"

@app.get("/{language_id}")
async def get_translations(language_id: str):
    query = f"""
        SELECT {language_id}
        FROM `{table_id}`
    """
    return [doc[language_id] for doc in client.query(query)]
    