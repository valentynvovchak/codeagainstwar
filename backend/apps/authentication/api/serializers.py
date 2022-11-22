from rest_framework import serializers

from apps.authentication.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'uuid', 'name', 'username', 'first_name', 'last_name', 'profile_picture',
            'email', 'github', 'date_joined', 'total_earned', 'solutions',
        ]
        # extra_kwargs = {'name': {'write_only': True}}
        depth = 1



