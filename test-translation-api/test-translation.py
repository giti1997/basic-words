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

s = {
  "copyright": "All rights reserved",
  "error-words": "We're very sorry, there was an error loading the translation data. Please try again.",
  "error-audio": "We're sorry, speech data is currently not available in {language}.",
  "privacy": "Privacy Policy",
  "subtitle": "We grouped the most basic words you may need for a quick trip. In a clean and organized place, with audios included!",
  "title": "Essential expressions for traveling to any country",
  "try-again": "Try again",
  "tos": "Terms of Service"
}

g = open("stat.json","w")
dic = {}
for x in lang:
    a = {}
    for (key,text) in s.items():
        a[key] = translate_text(lang[x], text)
        # a[key] = text
    dic[x] = a
g.write(str(dic))
g.close()

# print(translate_text("sq","Hello!"))