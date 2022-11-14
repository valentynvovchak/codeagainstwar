from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.authentication.api.serializers import UserSerializer


class UserAPIView(APIView):
    """
    For viewing users and their fields.
    """
    permission_classes = [IsAuthenticated]
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)


class TestOkView(APIView):

    def post(self, request, *args, **kwargs):
        return Response({'status': 'ok'}, status=status.HTTP_200_OK)
