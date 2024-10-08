from django.urls import path
from django.contrib import admin

from . import views


urlpatterns = [
    path("", views.IndexView.as_view(), name="home"),
    path("access",views.AccessView.as_view(),name="access"),
    path("map", views.MapView.as_view(),name="map"),
    path("timetable",views.TimeTableView.as_view(),name="timetable"),
    path("circles",views.CirclesView.as_view(),name="circles"),
    path("circles_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),
    path("greetings",views.GreetingsView.as_view(),name="greetings"),




]