# Django REST Framework settings
from datetime import timedelta

from django.conf import settings

from caw_proj.settings import IS_PRODUCTION_ENV

REST_FRAMEWORK_PROD = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend'
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        # 'dj_rest_auth.jwt_auth.JWTCookieAuthentication',

        # 'rest_framework_simplejwt.authentication.JWTAuthentication',
        # 'apps.accounts.authenticate.CustomAuthentication'
        # 'apps.accounts.backends.JWTAuthentication',
        # 'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    # 'DEFAULT_RENDERER_CLASSES': (
    #     'rest_framework.renderers.JSONRenderer',
    #     # 'rest_framework.renderers.TemplateHTMLRenderer',
    # ),
    'TEST_REQUEST_DEFAULT_FORMAT': 'json',
    # 'USER_DETAILS_SERIALIZER': 'apps.accounts.api.serializers.UserSerializer',

    'EXCEPTION_HANDLER': 'caw_proj.exceptions.core_exception_handler',
    'NON_FIELD_ERRORS_KEY': 'error',
}

if not IS_PRODUCTION_ENV:
    REST_FRAMEWORK_PROD.update({
        'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
        'PAGE_SIZE': 10
    })
    REST_FRAMEWORK = REST_FRAMEWORK_PROD
else:
    REST_FRAMEWORK = REST_FRAMEWORK_PROD
