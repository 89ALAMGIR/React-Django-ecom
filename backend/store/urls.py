from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),   # Add / here
    path('categories/', views.get_categories), # Add / here
]
