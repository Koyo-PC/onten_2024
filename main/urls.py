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


    path("home", views.IndexView.as_view(), name="home"),
    path("index", views.IndexView.as_view(), name="home"),
    path("circle",views.CirclesView.as_view(),name="circles"),
    path("clubs",views.CirclesView.as_view(),name="circles"),
    path("club",views.CirclesView.as_view(),name="circles"),
    path("circle_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),
    path("clubs_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),
    path("club_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),

]