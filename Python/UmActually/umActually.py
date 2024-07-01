import re

def um_actually(phrase):
  lowercase_phrase = phrase.lower()
  final_phrase = ""
  character_count = 0

  for i in lowercase_phrase:
    if (re.search("[^a-zA-Z0-9]", i)):
      final_phrase += i
      character_count+= 1
    else:
      if (character_count % 3 == 0):
        final_phrase += i.upper()
        character_count+= 1
      else:
        final_phrase += i
        character_count+= 1
    

  print(final_phrase)

um_actually("Inertia is a property of matter")