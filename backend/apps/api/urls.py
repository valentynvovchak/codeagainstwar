
from django.urls import path, include

urlpatterns = [
    # /api/...
    path('authentication/', include('apps.authentication.api.urls')),
]


