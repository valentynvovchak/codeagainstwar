from django.contrib import admin


from apps.authentication.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'uuid', 'email', 'username',  'date_joined', 'last_login', 'email_verified',
    ]
    # raw_id_fields = []
    list_filter = ['is_active', 'email_verified', 'is_staff', 'is_superuser']
    date_hierarchy = 'date_joined'
    search_fields = ('uuid', 'email', 'username')
    readonly_fields = ['password', 'last_login']
    # readonly_fields = ['icon']
