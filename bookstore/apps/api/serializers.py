from rest_framework import serializers
from bookstore.apps.yrb.models import YrbBook

class YrbBookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=YrbBook
        fields='__all__'