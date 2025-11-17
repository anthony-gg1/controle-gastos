from django.db import models
from user.models import User

class GoalStatus(models.TextChoices):
    IN_PROGRESS = 'IN_P', 'In Progress'
    FINISHED    = 'FINI', 'Finished'
    FAILED      = 'FAIL', 'Failed'
    CANCELED    = 'CANC', 'Canceled'

class Goal(models.Model):
    id = models.BigAutoField(
        db_column='goal_id',
        primary_key=True)
    
    user = models.ForeignKey(
        db_column='goal_user_id_fk',
        to=User,
        on_delete=models.CASCADE,
        null=False)

    title = models.CharField(
        db_column='goal_title',
        max_length=255,
        unique=True,
        null=False)
    
    value = models.DecimalField(
        db_column='goal_value',
        max_digits=10,
        decimal_places=2,
        default=0.0,
        min=0.0,
        null=False)
    
    description = models.TextField(
        db_column='goal_description',
        null=True)
    
    end_date = models.DateField(
        db_column='goal_end_date',
        null=False)
    
    status = models.CharField(
        db_column='goal_status',
        max_length=4,
        choices=GoalStatus.choices,
        default=GoalStatus.IN_PROGRESS,
        null=False)

    class Meta:
        db_name = 'tbGoal'
