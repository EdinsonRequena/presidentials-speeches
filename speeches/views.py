import csv
import json
import os

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login/')
def home(request):
    presidential_data = []
    csv_path = os.path.join('static', 'presidential_data',
                            'presidential_speeches.csv')
    with open(csv_path, 'r', newline='', encoding='utf-8') as csvfile:
        csv_reader = csv.reader(csvfile)
        next(csv_reader)
        for row in csv_reader:
            name = row[0]
            speeches_str = row[1]
            speeches_list = json.loads(speeches_str.replace("'", '"'))
            presidential_data.append({"name": name, "speeches": speeches_list})

    search_query = request.GET.get('search', '')

    filtered_presidents = []
    for president in presidential_data:
        if search_query.lower() in president['name'].lower():
            filtered_presidents.append(president)

    context = {'presidents': filtered_presidents, 'search_query': search_query}
    return render(request, 'home.html', context)


def signup(request):
    form = UserCreationForm

    if request.method == 'POST':
        print(request.method)
        form = UserCreationForm(request.POST)

        if form.is_valid():

            try:
                user = User.objects.create_user(
                    username=form.cleaned_data['username'],
                    password=form.cleaned_data['password1'],
                )
                print('siiiiu')
                user.save()
                login(request, user)
                return redirect('home')

            except Exception as e:
                print(e)

    return render(request, 'signup.html', {'form': form})


def singout(request):
    logout(request)
    return redirect('/')


def signin(request):
    form = AuthenticationForm
    try:
        if request.method == 'POST':
            form = AuthenticationForm(data=request.POST)

            if form.is_valid():
                user = authenticate(
                    username=form.cleaned_data['username'],
                    password=form.cleaned_data['password'],
                )

                if user is not None:
                    login(request, user)
                    return redirect('home')
    except Exception as e:
        print(e)

    return render(request, 'login.html', {'form': form})
