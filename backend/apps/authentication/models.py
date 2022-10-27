import uuid as uuid

from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, Group
from django.db import models
from django.utils import timezone
from caw_proj.defs import *


class UserManager(BaseUserManager):

    def _create_user(self, username, first_name, last_name, email, password, is_active, is_staff, is_superuser, **extra_fields):
        # if not username:
        #     raise TypeError('Users must have a username.')

        email = self.normalize_email(email)
        user = self.model(
            username=username, first_name=first_name, last_name=last_name, email=email, is_active=is_active,
            is_staff=is_staff, is_superuser=is_superuser, date_joined=timezone.now(), **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, username, first_name, last_name, email, password, **extra_fields):
        return self._create_user(
            username, first_name, last_name, email, password, is_active=True, is_staff=False, is_superuser=False, **extra_fields
        )

    def create_superuser(self, email, password, **extra_fields):
        user = self._create_user(
            None, None, None, email, password, is_active=True, is_staff=True, is_superuser=True, **extra_fields
        )

        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    def get_upload_picture(self, instance):
        return f'users/profile_pictures/{instance}'

    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    username = models.CharField(max_length=NAME_LENGTH, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=NAME_LENGTH, unique=True, null=True, blank=True)
    last_name = models.CharField(max_length=NAME_LENGTH, unique=True, null=True, blank=True)

    profile_picture = models.ImageField(upload_to=get_upload_picture, default=None, null=True, blank=True)

    email = models.EmailField(max_length=NAME_LENGTH, unique=True)
    email_verified = models.BooleanField(default=False)
    email_confirmed_change = models.BooleanField(default=False)

    # May be added:
    # country = models.ForeignKey(to=Country, on_delete=models.PROTECT)
    # phone = models.OneToOneField(to=Phone, on_delete=models.SET_NULL, null=True, blank=True)

    # remember_me = models.BooleanField(default=False)
    # security_question = models.ForeignKey(to=SecurityQuestion, on_delete=models.SET_NULL, null=True, blank=True)
    # two_factor_auth = models.BooleanField(default=False)

    groups = models.ManyToManyField(to=Group, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(default=timezone.now, editable=False)

    # payment_methods = ...  # todo

    objects = UserManager()

    USERNAME_FIELD = 'email'

    # REQUIRED_FIELDS = ['email']

    @property
    def get_name(self):
        if self.username:
            return f"{self.username}"
        else:
            return f"{self.email}"

    def __str__(self):
        return self.get_name

    def save(self, *args, **kwargs):
        if self.uuid:
            self.updated_at = timezone.now()

        return super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
