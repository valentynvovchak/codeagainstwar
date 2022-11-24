from django.apps import AppConfig


class CheckerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.checker'

    def ready(self):
        from apps.checker import signals
