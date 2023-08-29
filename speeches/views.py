from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login/')
def home(request):
    return render(request, 'home.html')


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
