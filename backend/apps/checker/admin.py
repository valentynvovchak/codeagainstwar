from django.contrib import admin
from django.db import models
from django_json_widget.widgets import JSONEditorWidget

from apps.core.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget},
    }

    list_display = [
        'id', 'function_name', 'tests'
    ]
    list_display_links = ['id', 'function_name']
    search_fields = ('id', 'function_name')

    # raw_id_fields = []
    # list_filter = []
    # readonly_fields = []

