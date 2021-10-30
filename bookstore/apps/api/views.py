from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from .serializers import YrbBookSerializer, YrbCustomerSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from bookstore.apps.yrb.models import YrbBook, YrbCustomer
from rest_framework import status, views
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser
# Create your views here.

class YrbBookView(viewsets.ModelViewSet):
    serializer_class=YrbBookSerializer
    queryset=YrbBook.objects.all()

class YrbCustomerView(viewsets.ModelViewSet):
    serializer_class=YrbCustomerSerializer
    permission_classes= [IsAuthenticated]
    
    def get_queryset(self):
        return YrbCustomer.objects.filter(cid=self.request.user.id)

    
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

