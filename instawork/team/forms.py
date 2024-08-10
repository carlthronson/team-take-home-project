from django.forms import ModelForm
from .models import TeamMember
from django import forms

BOOL_CHOICES = ((False, "Regular - Can't delete members"), (True, 'Admin - Can delete members'))

class TeamMemberForm(ModelForm):
    class Meta:
        model = TeamMember
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'role']
        widgets = {
            'role': forms.RadioSelect(choices=BOOL_CHOICES),
        }
