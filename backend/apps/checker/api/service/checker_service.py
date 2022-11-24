import os

from caw_proj.settings import CHECKER_SERVICE_PATH
from .pytest_parser import PytestParser


class CheckerService:
    def __init__(self, task):
        self.task_file = task
        self.test_file = f"test_{task}"

    def run_tests(self):
        return os.popen(f'pytest {CHECKER_SERVICE_PATH}/tests/{self.test_file}.py  --json-report --json-report-file={CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json').read()#.rstrip()

    def call(self):
        result = self.run_tests()
        parsed = PytestParser(result).parse(report_file=f'{CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json')
        os.remove(f'{CHECKER_SERVICE_PATH}/reports/report_{self.test_file}.json')
        return parsed 


# if __name__ == "__main__":
#     checker = CheckerService('2')
#     result  = checker.call()
#     print("Summary: ", result)

