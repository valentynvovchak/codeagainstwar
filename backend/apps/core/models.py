from django.db import models
from django.utils import timezone
from django.utils.safestring import mark_safe

from caw_proj.settings import CURRENCY_CHOICES, USD


class Challenge(models.Model):

    class DifficultyChoices(models.TextChoices):
        EAZY = 'easy'
        NORMAL = 'normal'
        HARD = 'hard'
        SPECIAL = 'special'

    title = models.CharField(max_length=150)
    description = models.TextField(max_length=1000, blank=True)
    difficulty = models.CharField(max_length=50, choices=DifficultyChoices.choices, default=DifficultyChoices.EAZY)
    cost = models.PositiveSmallIntegerField(default=0)
    # currency = models.CharField(max_length=50, choices=CURRENCY_CHOICES, default=USD)
    # task = models.ForeignKey(to=Task)

    times_completed = models.PositiveSmallIntegerField(default=0)

    created = models.DateTimeField(default=timezone.now)

    @property
    def get_cost(self):
        return f'{self.cost/100:.2f}'

    @property
    def get_formatted_difficulty(self):

        match self.difficulty:
            case self.DifficultyChoices.EAZY:
                color = 'green'
            case self.DifficultyChoices.NORMAL:
                color = '#e9d549'
            case self.DifficultyChoices.HARD:
                color = '#c13a07'
            case self.DifficultyChoices.SPECIAL:
                color = '#daa520'
            case _:
                color = 'black'
        return mark_safe(f'<span style="color:{color};font-weight:bold;">{str(self.difficulty).capitalize()}</span>')

    def __str__(self):
        return f'Challenge #{self.pk} {self.title}'
