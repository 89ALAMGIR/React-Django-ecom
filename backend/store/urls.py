from django.urls import path
from .views import api_view

urlpatterns = [
    path('api/', api_view), # This makes the URL http://127.0.0
]
