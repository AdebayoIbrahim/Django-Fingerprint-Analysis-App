from django.shortcuts import render

import requests
from django.views.generic import TemplateView
import sys
from subprocess import run,PIPE
from django.core.files.storage import FileSystemStorage  
# Create your views here.


class HomePageView(TemplateView):
    template_name = "Import_page/Master_Work.html"

class LandingPageView(TemplateView):
    template_name = 'Analyze_page/landing.html'
    
# class ResultPageView(TemplateView):
#     template_name = 'Results_page/Results.html'

def result(request):
    return render(request,'Results_page/Results.html')

def external(request):
    # inp = request.POST.get('param')
    image = request.FILES['img']

    print("Uploaded Image Is",image)
    fs = FileSystemStorage()
    filename = fs.save(image.name,image)
    fileurl = fs.open(filename)
    templateurl = fs.url(filename)
    print("raw url =>",filename)
    print("full url =>",fileurl)
    print("template url =>",templateurl)
    # Binarize file image
    # --------   Binarize -------
    image = run([sys.executable,"C:\\Users\\SetUp\\Desktop\\code\\pages\\django_project\\Binarize.py",str(fileurl),str(filename)],shell = False,stdout = PIPE)
    # segmentize file image
    # --------   Segmentize -------
    image = run([sys.executable,"C:\\Users\\SetUp\\Desktop\\code\\pages\\django_project\\segmentize.py",str(fileurl),str(filename)],shell = False,stdout = PIPE)

    # Normalize file image
    # --------   Normalize -------
    image = run([sys.executable,"C:\\Users\\SetUp\\Desktop\\code\\pages\\django_project\\Normalize.py",str(fileurl),str(filename)],shell = False,stdout = PIPE)

    # Oriental Filtering of finger
    # -------- Oriental filter -----
    
    # Thinning  of finger
    # --------  Thinning -------

    #Features of Fnger
    # --------  Features ------

    return render(request,'Analyze_page/landing.html')