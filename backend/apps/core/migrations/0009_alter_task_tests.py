# Generated by Django 4.1 on 2022-11-23 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_task_tests'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='tests',
            field=models.JSONField(default=[{'input': [], 'output': ''}]),
        ),
    ]