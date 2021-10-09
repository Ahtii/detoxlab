from split_settings.tools import include
from os import environ

ENV = environ.get('DJANGO_ENV') or 'local'

base_settings = [
    'components/common.py'
    'environments/{0}.py'.format(ENV)
]

include(*base_settings)
