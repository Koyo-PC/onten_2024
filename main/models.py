from django.db import models
from django.urls import reverse


class Circle(models.Model):
    name = models.CharField(verbose_name="サークル名", max_length=20)
    logo = models.ImageField(verbose_name="ロゴ", upload_to="logo/")
    order = models.FloatField(verbose_name="優先順位", default=0)
    location = models.CharField(verbose_name="活動場所", max_length=20)
    introduction = models.CharField(max_length=1000, verbose_name="紹介文")
    # account = models.URLField()

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()