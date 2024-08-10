from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class TeamMember(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone_number = PhoneNumberField(blank=True)
    role = models.BooleanField(default=True)
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
