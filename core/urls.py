from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('apps.blog.urls'), name='blog'),
    path('users/', include('apps.users.urls'), name='users'),
    url(r'^.*$', TemplateView.as_view(template_name='base.html')),
]
