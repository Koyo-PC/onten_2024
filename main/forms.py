from django import forms

class CirclesSearchForm(forms.Form):
    keyword = forms.CharField(
        label="検索",
        required=True,
        widget=forms.TextInput(attrs={"placeholder": "サークル名で検索"}),
    )