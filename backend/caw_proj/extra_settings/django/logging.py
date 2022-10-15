import os

from caw_proj.settings import BASE_DIR

LOG_FILE = os.path.join(BASE_DIR, 'errors.log')

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s: %(message)s'
        },
        'simple': {
            'format': '%(levelname)s: %(message)s'
        }
    },
    'handlers': {
        # 'null': {
        #     'level': 'DEBUG',
        #     'class': 'logging.NullHandler'
        # },
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose'
        },
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': LOG_FILE,
            'formatter': 'verbose'
        }
    },
    'loggers': {
        # 'django': {
        #     'handlers': ['null'],
        #     'propagate': True,
        #     'level': 'INFO'
        # },
        'apps': {  # 'apps.core.views'
            'handlers': ['file'],
            'level': 'INFO'
        },
        'tests': {
            'handlers': ['console', 'file'],
            'level': 'INFO'
        }
    }
}
