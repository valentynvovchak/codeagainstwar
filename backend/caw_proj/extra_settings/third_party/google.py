from environs import Env

env = Env()
env.read_env()


GOOGLE_API_KEY = env.str('GOOGLE_API_KEY', '')
