from rest_framework import serializers
from backend.core.transaction.models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'value', 'type', 'date', 'description', 'category']