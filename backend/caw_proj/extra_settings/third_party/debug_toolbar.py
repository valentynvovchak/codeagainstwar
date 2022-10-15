from environs import Env

env = Env()
env.read_env()

if not env.bool('IS_PRODUCTION_ENV'):
    INTERNAL_IPS = [
        '127.0.0.1',
    ]
