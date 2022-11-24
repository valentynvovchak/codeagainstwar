from django.contrib import admin

from apps.core.models import Challenge


@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = [
        'id', 'title', 'task', 'cost_', 'difficulty_',
    ]
    list_display_links = ['id', 'title']
    raw_id_fields = ['task']
    list_filter = ['difficulty']
    date_hierarchy = 'created'
    search_fields = ('id', 'title', 'description')
    readonly_fields = []
    # readonly_fields = []

    def cost_(self, obj):
        return obj.get_cost

    def difficulty_(self, obj):
        return obj.get_formatted_difficulty
