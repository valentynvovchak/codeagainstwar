from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class TestOkView(APIView):
    # authentication_classes = []
    # http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        return Response({'status': 'ok'}, status=status.HTTP_200_OK)
