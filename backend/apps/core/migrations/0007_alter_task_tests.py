# Generated by Django 4.1 on 2022-11-23 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_challenge_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='tests',
            field=models.JSONField(default=list),
        ),
    ]