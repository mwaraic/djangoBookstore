from django.urls import path
from .views import YrbBookView, LoginView, LogoutView, YrbCustomerView

urlpatterns = [
    path('api/books/', YrbBookView.as_view({'get':'list'})),
    path('api/profile/', YrbCustomerView.as_view({'get':'list'})),
    path('api/authenticate/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
]