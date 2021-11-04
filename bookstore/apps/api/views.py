from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from .serializers import YrbBookSerializer, YrbCustomerSerializer, TestSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from bookstore.apps.yrb.models import YrbBook, YrbCustomer
from rest_framework import status, views
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser
from .models import test
import json
from django.contrib.auth.models import User

class YrbBookView(viewsets.ModelViewSet):
    serializer_class=YrbBookSerializer
    queryset=YrbBook.objects.all()

class YrbCustomerView(viewsets.ModelViewSet):
    serializer_class=YrbCustomerSerializer
    permission_classes= [IsAuthenticated]
    
    def get_queryset(self):
        return YrbCustomer.objects.filter(cid=self.request.user.id)

class TestView(viewsets.ModelViewSet):
    serializer_class=TestSerializer
    permission_classes= [IsAuthenticated]
    
    def get_queryset(self):
        return test.objects.filter(user=self.request.user.id)
    
    def update(self, request, pk):
        resume=json.loads(json.dumps(request.data))['resume']
        test.objects.update(id=pk, resume=resume)
        return Response(status=status.HTTP_204_NO_CONTENT)

class OpenView(viewsets.ModelViewSet):
    serializer_class=TestSerializer
    permission_classes= [AllowAny]
    
    def get_queryset(self):
        return test.objects.filter(user=User.objects.get(username=self.kwargs['name']))

    
# Session login and logout endpoints

class LoginView(views.APIView):
    permission_classes= [AllowAny]

    def post(self, request, format=None):
        data = request.data

        username = data.get('username', None)
        password = data.get('password', None)

        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_active:
                login(request, user)

                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={
                       "message": "Invalid username or password",
                })
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={
                       "message": "Invalid username or password",
                })

class LogoutView(APIView):
    def post(self, request, format=None):
        # using Django logout
        logout(request)
        return Response(status=status.HTTP_200_OK)

