from django.urls import path
from .views import YrbBookView

urlpatterns = [
    path('api/books/', YrbBookView.as_view({'get':'list'})),
]