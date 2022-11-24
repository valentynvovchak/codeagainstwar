import os

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.checker.api.service.checker_service import CheckerService
from caw_proj.settings import CHECKER_SERVICE_PATH


class CheckAPIView(APIView):

    def post(self, *args, **kwargs):
        # try:
        code = self.request.data['code']
        task_id = self.request.data['task_id']
        target_file = f"{CHECKER_SERVICE_PATH}/tasks/{task_id}.py"

        with open(target_file, 'w') as file:
            file.write(code.replace("\r", ''))

        results = CheckerService(task_id).call()
        os.remove(target_file)

        return Response(results, status=status.HTTP_200_OK)

        # except Exception:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)


class TestAPIView(APIView):

    def post(self, *args, **kwargs):
        task_id = self.request.data['task_id']
        result = os.popen(f'pytest {CHECKER_SERVICE_PATH}/tests/test_{task_id}.py  --json-report --json-report-file={CHECKER_SERVICE_PATH}/reports/report_test_{task_id}.json').read()#.rstrip()

        return Response(result, status=status.HTTP_200_OK)
