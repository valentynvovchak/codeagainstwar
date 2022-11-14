"""
Django settings for caw_proj project.

Generated by 'django-admin startproject' using Django 4.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import os
from pathlib import Path
from environs import Env

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env = Env()
env.read_env()

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env.str('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('DEBUG', default=False)

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[])  # if not running_tests() else []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_extensions',
    'django.contrib.sites',

    # Apps
    'apps.api',
    'apps.authentication',
    'apps.core',
    'corsheaders',

    # Custom
    'debug_toolbar',
    'nested_admin',
    'rest_framework',
    # 'rest_framework.authtoken',
    # 'dj_rest_auth',

    # oauth
    'oauth2_provider',
    'social_django',
    'drf_social_oauth2',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'caw_proj.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'caw_proj.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        # 'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env.str('DB_NAME'),
        'USER': env.str('DB_USER'),
        'PASSWORD': env.str('DB_PASS'),
        'HOST': env.str('DB_HOST'),
        'PORT': env.int('DB_PORT'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Europe/Kiev'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'public', 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'public/media/')

IS_PRODUCTION_ENV = env.bool('IS_PRODUCTION_ENV')

if IS_PRODUCTION_ENV:
    STATICFILES_DIRS = [
        # "/home/<user>/path/to/project_dir/frontend/build/static",
        os.path.join("/".join(str(BASE_DIR).split('/')[:-1]), "frontend/build/static")
    ]

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# if running_tests():
#     # For tests execution, the fastest password hasher is used
#     # (may increase execution speed ×10 and more)
#     PASSWORD_HASHERS = (
#         'django.contrib.auth.hashers.MD5PasswordHasher',
#     )

LAZY_SESSION_ID_KEY = 'lsid'

SITE_ID = 1

AUTH_USER_MODEL = 'authentication.User'


CORS_ORIGIN_WHITELIST = [  # for React
    'http://localhost:3000',
]

# Account settings

# ACCOUNT_CONFIRM_EMAIL_ON_GET = True
# ACCOUNT_AUTHENTICATION_METHOD = 'email'
# ACCOUNT_EMAIL_REQUIRED = True
# ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
# if IS_PRODUCTION_ENV:
#     LOGIN_URL = 'https://codeagainstwar.online/.../'
# else:
#     LOGIN_URL = 'http://localhost:8000/api/accounts/dj-rest-auth/login/'

# LOGOUT_ON_PASSWORD_CHANGE = True
# OLD_PASSWORD_FIELD_ENABLED = False
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


# CORS_ORIGIN_ALLOW_ALL = False

# Django logging
from .extra_settings.django.logging import *  # noqa

# Django mailing
from .extra_settings.django.email import *  # noqa

# Django REST Framework
from .extra_settings.third_party.drf import *  # noqa

# Debug Toolbar
from .extra_settings.third_party.debug_toolbar import *  # noqa

# YouTube
from .extra_settings.third_party.google import *  # noqa


# CONSTANTS
USD = "USD"
EUR = "EUR"
UAH = "UAH"
RUB = "RUB"
GBP = "GBP"
PLN = "PLN"
CZK = "CZK"

CURRENCY_CHOICES = (
    (USD, USD),
    (EUR, EUR),
    (UAH, UAH),
    (RUB, RUB),
    (GBP, GBP),
    (PLN, PLN),
    (CZK, CZK),
)

