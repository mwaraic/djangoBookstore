from django.urls import path,include
from .views import TestView, YrbBookView,OpenView, LoginView, LogoutView, YrbCustomerView

urlpatterns = [
    path('api/books/', YrbBookView.as_view({'get':'list'})),
    path('api/profile/', YrbCustomerView.as_view({'get':'list'})),
    path('api/authenticate/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
    path('api/resume/', TestView.as_view({'get':'list'})),
    path('api/resume/<int:pk>', TestView.as_view({'put':'update'})),
    path('api/open/<str:name>', OpenView.as_view({'get':'list'})),
    path('ckeditor/', include('ckeditor_uploader.urls')),
]