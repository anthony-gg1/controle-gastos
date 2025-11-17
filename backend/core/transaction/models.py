from django.db import models
from user.models import User
from datetime import datetime

class TransactionType(models.TextChoices):
    REVENUE = 'REV', 'Revenue'
    SPENT   = 'SPE', 'Spent'

class TransactionCategory(models.TextChoices):
    INC_SALARY     = 'INC_SALARY',     'Salary' 
    INC_INVESTMENT = 'INC_INVESTMENT', 'Investment'
    INC_FREELANCE  = 'INC_FREELANCE',  'Freelance'
    INC_DONATION   = 'INC_DONATION',   'Donation'
    INC_OTHER      = 'INC_OTHER',      'Other Income'

    EXP_FOOD           = 'EXP_FOOD',          'Food' 
    EXP_TRANSPORT      = 'EXP_TRANSPORT',     'Transport'
    EXP_ENTERTAINMENT  = 'EXP_ENTERTAINMENT', 'Entertainment'
    EXP_INVOICE        = 'EXP_INVOICE',       'Invoice'
    EXP_OTHER          = 'EXP_OTHER',         'Other Expense'

class Transaction(models.Model):
    id = models.BigAutoField(
        db_column='transaction_id_pk',
        primary_key=True)
    
    user = models.ForeignKey(
        db_column='transaction_user_id_fk',
        to=User,
        on_delete=models.CASCADE,
        null=False)
    
    value = models.DecimalField(
        db_column='transaction_value',
        max_digits=10,
        decimal_places=2,
        default=0.0,
        null=False)
    
    type = models.CharField(
        db_column='transaction_type',
        max_length=3,
        choices=TransactionType.choices,
        null=False)

    date = models.DateField(
        db_column='transaction_date',
        null=False,
        default=datetime.now)
    
    description = models.TextField(
        db_column='transaction_description',
        null=True)
    
    category = models.CharField(
        db_column='transaction_category',
        max_length=20,
        choices=TransactionCategory.choices,
        null=False)

    class Meta:
        db_table='tbTransaction'