from django.test import TestCase
from .models import TeamMember

# Create your tests here.
class TeamMemberTestCase(TestCase):
    def setUp(self):
        self.team_member = TeamMember.objects.create(
          first_name="Carl",
          last_name="Thronson",
          email="carlthronson@gmail.com",
          phone_number="+14082346237")

    def test_default_role_is_regular(self):
        """TeamMembers created without role are correctly defaulted to regular"""
        carl = self.team_member
        self.assertEqual(carl.role, False)
