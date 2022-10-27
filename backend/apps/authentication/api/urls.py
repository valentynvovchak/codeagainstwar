
from django.urls import path
from .views import TestOkView

urlpatterns = [
    # /api/authentication/...
    path('test_ok/', TestOkView.as_view(), name='test_ok')
]


