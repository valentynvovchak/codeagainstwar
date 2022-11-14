from django.contrib import admin

from apps.authentication.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'uuid', 'username', 'first_name', 'last_name', 'email',
        'date_joined', 'last_login', 'total_earned_', 'is_superuser'
    ]
    # raw_id_fields = []
    list_filter = ['is_active', 'is_staff', 'is_superuser']
    date_hierarchy = 'date_joined'
    search_fields = ('uuid', 'email', 'username')
    readonly_fields = ['last_login']
    # readonly_fields = []

    def total_earned_(self, obj):
        return obj.total_earned
