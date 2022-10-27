"""caw_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.template.defaulttags import url
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework import routers

router = routers.DefaultRouter()
# router urls ...

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.api.urls')),
    path('auth/', include('drf_social_oauth2.urls', namespace='drf'))
]

if not settings.IS_PRODUCTION_ENV:
    import debug_toolbar

    urlpatterns += [
        path('', include(router.urls)),
        # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

        # Django Debug toolbar
        path('__debug__/', include(debug_toolbar.urls)),

    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

