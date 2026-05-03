from django.shortcuts import render

from django.http import JsonResponse

# This function sends a message back to React
def api_view(request):
    return JsonResponse({"message": "Hello from Django!"})

