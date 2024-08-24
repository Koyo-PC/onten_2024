from django.shortcuts import render
from django.http import HttpResponse 

from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView

from .models import Circle
from .forms import (
    CirclesSearchForm,
)


class IndexView(TemplateView):
    template_name = "main/index.html"

class AccessView(TemplateView):
    template_name = "main/access.html"

class MapView(TemplateView):
    template_name = "main/map.html"

class TimeTableView(TemplateView):
    template_name = "main/timetable.html"
    
class CirclesView(ListView):
    template_name = "main/circles.html"
    model = Circle
    context_object_name = "circles"

    def get_queryset(self):
        circles = super().get_queryset().order_by('order')
        return circles
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = self.get_queryset()

        form = CirclesSearchForm(self.request.GET)
        if form.is_valid():
            keyword = form.cleaned_data["keyword"]
            if keyword:
                queryset = queryset.filter(name__icontains=keyword)
                context["keyword"] = keyword

        context["form"] = form
        context["circles"] = queryset
        return context
    
class CirclesDetailView(DetailView):
    model = Circle
    template_name = "main/circles_detail.html"
    context_object_name = "circle"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data_list = Circle.objects.filter(id=self.kwargs["pk"])
        context["circle_data_list"] = data_list

        return context