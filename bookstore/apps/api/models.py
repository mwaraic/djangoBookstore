from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
# Create your models here.

class test(models.Model):
    user=models.ForeignKey(User, on_delete=models.DO_NOTHING)
    resume=RichTextUploadingField()