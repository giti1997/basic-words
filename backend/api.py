from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from google.cloud import bigquery

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    