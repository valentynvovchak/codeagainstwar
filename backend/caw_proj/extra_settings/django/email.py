from environs import Env

env = Env()
env.read_env()

EMAIL_BACKEND = env.str("EMAIL_BACKEND", "django.core.mail.backends.smtp.EmailBackend")
EMAIL_HOST = env.str("EMAIL_HOST", "")
EMAIL_USE_TLS = env.str("EMAIL_USE_TLS", True)
EMAIL_PORT = env.str("EMAIL_PORT", "")
EMAIL_HOST_USER = env.str("EMAIL_HOST_USER", "")
EMAIL_RECIPIENT_LIST = env.str("EMAIL_RECIPIENT_LIST", "").split(",")
EMAIL_HOST_PASSWORD = env.str("EMAIL_HOST_PASSWORD", "")
