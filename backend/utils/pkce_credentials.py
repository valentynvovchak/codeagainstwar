import base64
from environs import Env

env = Env()
env.read_env()

client_id = env.str('CLIENT_ID')
secret = env.str('CLIENT_SECRET')
credential = "{0}:{1}".format(client_id, secret)
encoded = base64.b64encode(credential.encode("utf-8"))
print(encoded)
