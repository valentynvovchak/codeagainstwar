import os

from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from apps.checker.utils import make_tests
from apps.core.models import Task
from caw_proj.settings import BASE_DIR, CHECKER_SERVICE_PATH


@receiver(post_delete, sender=Task)
def post_delete_task(sender, instance, using, **kwargs):
    file_path = f'{CHECKER_SERVICE_PATH}/tests/test_{instance.pk}.py'

    if os.path.exists(file_path):
        os.remove(file_path)


@receiver(post_save, sender=Task)
def post_save_task(sender, instance, using, **kwargs):
    tests = make_tests(task_id=instance.pk, func_name=instance.function_name, test_json=instance.tests)

    with open(f'{CHECKER_SERVICE_PATH}/tests/test_{instance.pk}.py', 'w') as test_file:
        test_file.write(tests)
