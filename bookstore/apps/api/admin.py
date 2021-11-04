from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

from .models import test

class TestAdminForm(forms.ModelForm):
    class Meta:
        model = test
        fields = '__all__'

class TestAdmin(admin.ModelAdmin):
    form = TestAdminForm

admin.site.register(test, TestAdmin)