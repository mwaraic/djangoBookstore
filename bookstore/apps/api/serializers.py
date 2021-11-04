from rest_framework import serializers
from bookstore.apps.yrb.models import YrbBook, YrbCustomer
from .models import test

class YrbBookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=YrbBook
        fields='__all__'

class YrbCustomerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=YrbCustomer
        fields='__all__'

class TestSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=test
        fields='__all__'