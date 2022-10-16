import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../genuine-essence-364222-54dfa19feae0.json"

def translate_text(target, text):
    """Translates text into the target language.

    Target must be an ISO 639-1 language code.
    See https://g.co/cloud/translate/v2/translate-reference#supported_languages
    """
    import six
    from google.cloud import translate_v2 as translate

    translate_client = translate.Client()

    if isinstance(text, six.binary_type):
        text = text.decode("utf-8")

    # Text can also be a sequence of strings, in which case this method
    # will return a sequence of results for each text.
    result = translate_client.translate(text, target_language=target)
    return result["translatedText"]

#    print(u"Text: {}".format(result["input"]))
#    print(u"Translation: {}".format(result["translatedText"]))
#    print(u"Detected source language: {}".format(result["detectedSourceLanguage"]))

#print(translate_text("fr", "Hello!"))

import json

json_file = open('lan-dict.json')
lang = json.load(json_file)
json_file.close()
 
g = open("hello.out", "a")
for x in lang:
    g.write(translate_text(lang[x], "Hello!") + "\n")
#    g.write("Hello!\n")
g.close()

