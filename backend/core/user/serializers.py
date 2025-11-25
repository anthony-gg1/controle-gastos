from rest_framework import serializers
from backend.core.user.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'fullname', 'email', 'cpf', 'tel']