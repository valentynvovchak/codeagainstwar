from rest_framework import serializers

from apps.core.models import Challenge


class ChallengeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Challenge
        fields = '__all__'
