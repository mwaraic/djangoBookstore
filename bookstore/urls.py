"""bookstore URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from bookstore.apps.dashboard.views import club_view, index_view, home_view, profile_edit_view, clubs_view, profile_view
from bookstore.apps.account.views import account_create_view, account_login_view, logoutUser

admin.autodiscover()
urlpatterns = [
    path('',include('bookstore.apps.frontend.urls')),
    path('',include('bookstore.apps.api.urls'))
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



