import base64
from environs import Env

env = Env()
env.read_env()

client_id = 'RA2RNqwILSpUqRhTkY9TqXXfF2GUB1Fr4TxRanMm'
secret = 'fbAoaUBV0JsmlUjysdXigaVqWhbz5QSarxXWYC4ovFipMoCQm4dLlH53sgc6EO0mVXODz6H46nSNhIhRoTl9nOAauiIubo9r5sIBTTO098SlD1Ga1mnxjdugUYGeu0EW'
credential = "{0}:{1}".format(client_id, secret)
encoded = base64.b64encode(credential.encode("utf-8"))
print(encoded)
