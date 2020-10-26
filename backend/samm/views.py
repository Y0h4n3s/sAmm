from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import UserSerializer      # add this
from .models import User


class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()