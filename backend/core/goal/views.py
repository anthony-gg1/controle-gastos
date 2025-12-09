from rest_framework.viewsets import ModelViewSet
from .models import Goal
from .serializers import GoalSerializer

class GoalViewSet(ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer