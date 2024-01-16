# pages/urls.py
# from django.conf.urls import re_path
from django.urls import path
from .views import HomePageView,LandingPageView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("landing/",LandingPageView.as_view(),name = "landing"),
    path("result/",views.result),
    path('external/',views.external),
]+ static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)