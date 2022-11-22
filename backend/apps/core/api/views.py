from rest_framework import mixins, filters
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet

from apps.core.api.serializers import ChallengeSerializer
from apps.core.models import Challenge


class ChallengeViewSet(mixins.RetrieveModelMixin, mixins.ListModelMixin, GenericViewSet):
    """
    For viewing users and their fields.
    """
    queryset = Challenge.objects.order_by('-pk')
    serializer_class = ChallengeSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']

    http_method_names = ['get']

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        return context

