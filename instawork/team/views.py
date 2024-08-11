from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse
from django.views.generic import ListView

from .models import TeamMember
from .serializers import *

from django.views.generic.edit import CreateView, UpdateView
from .forms import TeamMemberForm

from django.urls import reverse_lazy
from django.views.generic import DeleteView

@api_view(['GET', 'POST'])
def teammember_list(request):
    if request.method == 'GET':
        data = TeamMember.objects.all()

        serializer = TeamMemberSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TeamMemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def teammember_detail(request, pk):
    try:
        teammember = TeamMember.objects.get(pk=pk)
    except TeamMember.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = TeamMemberSerializer(teammember, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        teammember.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TeamMemberCreateView(CreateView):
    model = TeamMember
    form_class = TeamMemberForm
    template_name = 'team/teammember_form.html'
    success_url = '/team/team/'  # Redirect after successful form submission

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['is_edit'] = False
        context['header_title'] = 'Add a team member'
        context['header_description'] = 'Set email, location and role.'
        return context

class TeamMemberUpdateView(UpdateView):
    model = TeamMember
    form_class = TeamMemberForm
    template_name = 'team/teammember_form.html'
    success_url = '/team/team/'  # Redirect after successful form submission

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['is_edit'] = True
        context['header_title'] = 'Edit Team Member'
        context['header_description'] = 'Edit contact info, location and role.'
        return context

class TeamMemberListView(ListView):
    model = TeamMember
    template_name = 'team/teammember_list.html'  # Specify your template name
    context_object_name = 'team_members'  # Name to use in the template context

class TeamMemberDeleteView(DeleteView):
    model = TeamMember
    template_name = 'team/teammember_confirm_delete.html'
    success_url = reverse_lazy('teammember-list')  # Redirect after successful deletion
