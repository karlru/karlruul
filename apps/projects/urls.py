from django.urls import path
from .views import ProjectListView

urlpatterns = [
	path('getAll/', ProjectListView.as_view()),
]