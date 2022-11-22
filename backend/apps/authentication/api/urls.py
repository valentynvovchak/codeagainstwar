
from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import TestOkView, UserAPIView

router = DefaultRouter()
# router.register('name', ViewSet, basename='')

urlpatterns = [
    # /api/authentication/...
    path('get_user/', UserAPIView.as_view(), name='get_user'),
    path('test_ok/', TestOkView.as_view(), name='test_ok'),

] + router.urls



