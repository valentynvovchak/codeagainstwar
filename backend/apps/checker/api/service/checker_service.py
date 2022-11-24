import os

from caw_proj.settings import CHECKER_SERVICE_PATH, PYTEST_PATH_PROD, PYTEST_PATH_LOCAL, IS_PRODUCTION_ENV
from .pytest_parser import PytestParser
import subprocess


class CheckerService:
    def __init__(self, task):
        self.task_file = task
        self.test_file = f"test_{task}"

    def run_tests(self):
        pytest_path = PYTEST_PATH_PROD if IS_PRODUCTION_ENV else PYTEST_PATH_LOCAL

        subprocess.run([
            f'{pytest_path}',
            f'{CHECKER_SERVICE_PATH}/tests/{self.test_file}.py',
            '--json-report',
            f'--json-report-file={CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json']
        )

    def call(self):
        result = self.run_tests()
        parsed = PytestParser(result).parse(report_file=f'{CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json')
        os.remove(f'{CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json')
        return parsed 


# if __name__ == "__main__":
#     checker = CheckerService('2')
#     result  = checker.call()
#     print("Summary: ", result)

