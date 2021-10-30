from django.urls import path
from .views import AllowAnyView, PrivateView # the view responsible for the frontend

# Frontend urls as reflected in App.jsx

urlpatterns = [
    path('', PrivateView, name='dashboard'),
    path('login/', AllowAnyView, name='login'), 
]
