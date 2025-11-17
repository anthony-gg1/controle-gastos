from django.db import models

class User(models.Model):
    id = models.BigAutoField(
        db_column='user_id_pk',
        primary_key=True)

    fullname = models.CharField(
        db_column='user_fullname',
        max_length=255,
        null=False)

    email = models.EmailField(
        db_column='user_email',
        max_length=254,
        unique=True,
        null=False)

    cpf = models.CharField(
        db_column='user_cpf',
        max_length=11, 
        unique=True,
        null=False)
    
    tel = models.CharField(
        db_column='user_tel',
        max_length=13,
        unique=True,
        null=False)

    class Meta:
        db_table = 'tbUser'