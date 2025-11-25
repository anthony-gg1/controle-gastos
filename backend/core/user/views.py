from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

# Create your views here.
class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]