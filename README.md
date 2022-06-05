# Hive-Techware

```
App, built using frontend React+Redux and backend using Django 
```

## Description
A convenient and fun way to browse featured clothing & accessories from some of the best clothing brands online, especially aimed at teenagers. With this web app, you can browse products by any color you like or by trending colors, save products into favorites, and share products with friends on social media.

## Live Demo

**This App uses a Heroku free plan, so I am afraid that it takes time to load the pages.**

Check out [FRONTEND LIVE DEMO](https://hive-tech-ware-frontend.herokuapp.com/) here!!

Check out [API LIVE DEMO](https://hive-tech-ware-backend.herokuapp.com/) here!!

## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone

```
https://github.com/europeanvisitors/europeanvisitors.git
```

2. Backend setting

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/posts/

# To have dummy data for testing run:
python manage.py fixtures/dummy-data.json
```

3. Frontend setting

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
