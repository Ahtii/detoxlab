from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('admin/', admin.site.urls),
]
