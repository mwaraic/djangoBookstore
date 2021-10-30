from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages

# React project views

def AllowAnyView(request, *args, **kwargs):
    if request.user.is_authenticated:
     return redirect('dashboard')
    return render(request, "frontend/index.html") 
    
@login_required(login_url='login') 
def PrivateView(request, *args, **kwargs):
    if request.user.is_authenticated==False:
        return redirect('login')
    return render(request, "frontend/index.html") 

