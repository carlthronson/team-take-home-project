from django.urls import path

from . import views
from .views import TeamMemberCreateView, TeamMemberUpdateView, TeamMemberListView

from django.urls import path
from .views import TeamMemberDeleteView

urlpatterns = [
    path('teammember/add/', TeamMemberCreateView.as_view(), name='teammember-add'),
    path('teammember/<int:pk>/edit/', TeamMemberUpdateView.as_view(), name='teammember-edit'),
    path('team/', TeamMemberListView.as_view(), name='teammember-list'),
    path('teammember/<int:pk>/delete/', TeamMemberDeleteView.as_view(), name='teammember-delete'),
]
