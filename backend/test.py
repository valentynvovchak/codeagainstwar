import os

from caw_proj.settings import CHECKER_SERVICE_PATH

print(
    os.popen(
        f'pytest {CHECKER_SERVICE_PATH}/tests/test_4.py  --json-report --json-report-file={CHECKER_SERVICE_PATH}/reports/report_test_4.json'
    ).read()
)

