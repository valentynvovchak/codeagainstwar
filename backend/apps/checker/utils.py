from caw_proj.settings import CHECKER_SERVICE


class CodeBlock:
    def __init__(self, head, block):
        self.head = head
        self.block = block

    def __str__(self, indent=""):
        result = indent + self.head + ":\n"
        indent += "    "
        for block in self.block:
            if isinstance(block, CodeBlock):
                result += block.__str__(indent)
            else:
                result += indent + block + "\n"
        return result


def make_tests(task_id, func_name, test_json):
    block = ''

    # writing imports
    imports = [
        'import importlib'
    ]

    # test logic lines

    # try
    try_block = CodeBlock('try', [f'{func_name} = module.{func_name}'])

    # except
    test_block = CodeBlock('def test()', ['\'Function has correct name\'', f'assert {func_name} is not None'])  # todo
    try_except_block = CodeBlock('except', [test_block])

    # else
    functions = []
    for test_index, test in enumerate(test_json):
        desc = test['desc']
        input_params = test['input']
        output = test['output']

        params_str = ", ".join(
            [str(param) if str(param).lstrip("-").isdigit() else f'\'{param}\'' for param in input_params]
        )
        output_str = output or None
        if output_str:
            isinstances = isinstance(output_str, (dict, list, tuple, set, frozenset))
            if str(output_str).lstrip("-").isdigit() or isinstances:
                output_str = str(output_str)
            else:
                output_str = f'\'{output_str}\''

        functions.append(
            CodeBlock(
                f'def test{test_index+1}()',
                [f'\'{desc}\'', f'assert {func_name}({params_str}) == {output_str}']
            )
        )

    try_else_block = CodeBlock('else', functions)

    # collect all together
    code = [
        f'module = importlib.import_module("{CHECKER_SERVICE}.tasks.{task_id}")\n\n',
        try_block,
        try_except_block,
        try_else_block
    ]

    for imp in imports:
        block += str(imp) + '\n'
    block += '\n'

    for code_line in code:
        block += str(code_line) + '\n'

    return str(block)
