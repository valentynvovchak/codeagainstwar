
from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
# router.register('name', ViewSet, basename='')

urlpatterns = [
    # /api/checker/...
    path('', views.CheckAPIView.as_view(), name='checker')

] + router.urls



