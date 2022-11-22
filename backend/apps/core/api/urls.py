from django.urls import path
from rest_framework.routers import DefaultRouter

from apps.core.api.views import ChallengeViewSet

router = DefaultRouter()
router.register('challenges', ChallengeViewSet)

urlpatterns = [
    # /api/core/...
    # path('/', .as_view(), name='')
] + router.urls


