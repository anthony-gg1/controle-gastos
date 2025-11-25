from rest_framework import serializers
from backend.core.goal.models import Goal

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['id', 'user', 'title', 'value', 'description', 'end_date', 'status']