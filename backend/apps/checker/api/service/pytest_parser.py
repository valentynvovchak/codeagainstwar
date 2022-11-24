import json
import re


class Test:
    def __init__(self, result):
        self.status = result['outcome']
        self.description = result['nodeid'].replace('module', '').strip()
        
        crash        = result['call'].get('crash')
        if crash:
            self.message = crash['message']
            self.line    = crash['lineno']

    def summary(self):
        attrs_to_include = ['status', 'description', 'message', 'line']

        return { key: self.__getattribute__(key) for key in attrs_to_include if hasattr(self, key) }


class PytestParser:
    def __init__(self, report_file='.report.json'):
        self.report_file = report_file

    def load_json(self):
        return json.load(open(self.report_file))

    def parse(self, report_file):
        res = PytestParser(report_file=report_file).load_json()

        if res['exitcode'] < 2:
            return {
                'tests': [Test(test_result).summary() for test_result in res['tests']]
            }
        else:
            error_raw = res['collectors'][-1]['longrepr']
            error_message = re.findall('[A-Za-z]*Error: [A-Za-z ]*', error_raw)[0]

            return {
                'error': error_message or 'Unknwon error occured! Please check your code!',
            }
