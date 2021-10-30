from rest_framework import serializers
from bookstore.apps.yrb.models import YrbBook, YrbCustomer

class YrbBookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=YrbBook
        fields='__all__'

class YrbCustomerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=YrbCustomer
        fields='__all__'