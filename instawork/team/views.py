from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import TeamMember
from .serializers import *

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
