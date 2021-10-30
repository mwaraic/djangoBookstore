from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from .serializers import YrbBookSerializer
from rest_framework.permissions import IsAuthenticated
from bookstore.apps.yrb.models import YrbBook
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser
# Create your views here.

class YrbBookView(viewsets.ModelViewSet):
    serializer_class=YrbBookSerializer
    queryset=YrbBook.objects.all()
