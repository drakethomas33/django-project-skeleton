django-project-skeleton
=======================

My preferred Django project template, very strongly influenced by the great [twoscoops repository](https://github.com/twoscoops/django-twoscoops-project).

That said, that project was meant to be used with Django 1.6, and this is updated to run with 1.9.9.
Also, this template is specifically geared towards Django apps to be run on Heroku.

First, clone the project. Then do the standard virtual environment stuff (note, the requirements live in a directory and the top level requirements.txt points to production.txt).
Command below references Python 3.5 in line with the runtime.txt file that specifies python-3.5.2. You may need to replace the path below with your local path to Python 3.5.

    cd new_project/

    virtualenv venv --distribute --no-site-packages -p /Library/Frameworks/Python.framework/Versions/3.5/bin/python3.5

    . venv/bin/activate

    sudo pip install -r requirements/local.txt

Create your database:

    createdb <db_name>

Customise Django settings:



Copy these commands into an env_development file and run it:

    # You will need to have Postgres installed locally.
    # For Mac OS X, see http://postgresapp.com/
    export PATH="/Applications/Postgres.app/Contents/MacOS/bin:$PATH"

    # This is your local database URL
    export DATABASE_URL=postgres://localhost:5432/<db_name>

    # This is your local settings file
    export DJANGO_SETTINGS_MODULE=project.settings.local

Now run the server and check <http://localhost:8000>.

then make migrations and migrate:

    python manage.py makemigrations
    python manage.py migrate

Now run the server and check <http://localhost:8000>.

Now run

    git init

and follow the instructions on GitHub to create a new repository to push to.

Note white noise for static files
Note bower
Note SASS / Compass
index.html served static, including Angular
