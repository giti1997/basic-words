import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../genuine-essence-364222-54dfa19feae0.json"

def synthesize_text(language,text):
    """Synthesizes speech from the input string of text."""
    from google.cloud import texttospeech

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    # Note: the voice can also be specified by name.
    # Names of voices can be retrieved with client.list_voices().
    voice = texttospeech.VoiceSelectionParams(
        language_code=language
    #     name="en-US-Standard-C",
    #     ssml_gender=texttospeech.SsmlVoiceGender.FEMALE,
    )

    # print("language set to" + language)


    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )
    # print(text)

    response = client.synthesize_speech(
        request={"input": input_text, "voice": voice, "audio_config": audio_config}
    )

    return response.audio_content

    # The response's audio_content is binary.
    # with open("output1.mp3", "wb") as out:
        # out.write(response.audio_content)
        # print('Audio content written to file "output1.mp3"')

# import json
# import pandas as pd

# df = pd.read_csv('hello.csv')
# for x in df:
#     df[x][1] = synthesize_text(df[x][0],df[x][1])

with open("output.mp3","wb") as out:
    out.write(synthesize_text("sq","Përshëndetje"))