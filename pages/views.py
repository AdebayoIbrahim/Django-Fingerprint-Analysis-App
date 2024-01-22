from django.shortcuts import render
from django.views.generic import TemplateView
import sys
from subprocess import run,PIPE
from django.core.files.storage import FileSystemStorage  
from django.conf import settings
from django.http import HttpResponse
import os

# from pages.Binarize import enhance
# Create your views here.


class HomePageView(TemplateView):
    template_name = "Import_page/Master_Work.html"

# class LandingPageView(TemplateView):
#     template_name = 'Analyze_page/landing.html'
    
# class ResultPageView(TemplateView):
#     template_name = 'Results_page/Results.html'

def result(request):
    return render(request,'Results_page/Results.html')

def external(request):
    
    if request.method == 'POST':
        # inp = request.POST.get('param')
        image = request.FILES['img']
        fs = FileSystemStorage()
        filename = fs.save(image.name,image)
        fileurl = fs.open(filename)
        templateurl = fs.url(filename)
        print("raw url =>",filename)
        print("full url =>",fileurl)
        print("template url =>",templateurl)

        # Binarize file image
        # --------   Binarize -------
        # image = run([sys.executable,  "C:\\Users\\SetUp\\Desktop\\code\\pages\\django_  project\\Binarize.py",str(fileurl),str    (filename)],shell = False,stdout = PIPE)
        image = run([sys.executable,
        os.path.join(settings.BASE_DIR, 'Binarize.py'), str(fileurl),str(filename)],shell = False,   stdout = PIPE)
    
        # segmentize file image
        # --------   Segmentize -------
        image = run([sys.executable,os.path.join    (settings.BASE_DIR,'segmentize.py'),str (fileurl),str(filename)],shell = False,stdout =  PIPE)

        # Normalize file image
        # --------   Normalize -------
        image = run([sys.executable,os.path.join    (settings.BASE_DIR,'Normalize.py'),str(fileurl),    str(filename)],shell = False,stdout = PIPE)

        # Oriental Filtering of finger
        # -------- Oriental filter -----
    
        # Thinning  of finger
        # --------  Thinning -------

        #Features of Fnger
        # --------  Features ------

        return render(request,'Analyze_page/landing.html')

    else:
        return HttpResponse("<h1 style = 'color:red;text-align:center;font-family: Ubuntu' >Invalid method Paramter Used!!</h1>")
    
