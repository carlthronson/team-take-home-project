from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class TeamMember(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    phone_number = PhoneNumberField(blank=True)
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
