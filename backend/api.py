from fastapi import FastAPI

from google.cloud import bigquery

app = FastAPI()

# Construct a BigQuery client object.
client = bigquery.Client()
#set table_id
table_id = "basic-words.basic_words.words"

@app.get("/{language_id}")
async def get_translations(language_id: str):
    query = f"""
        SELECT {language_id}
        FROM `{table_id}`
    """
    return [doc[language_id] for doc in client.query(query)]
    