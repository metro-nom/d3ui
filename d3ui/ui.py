from flask import Blueprint, render_template

__version__ = "20.12.2"

blueprint = Blueprint('ui', __name__, static_folder='static')


@blueprint.route('/', methods=['GET'])
def index():
    """Renders the main application template.

    Returns
    -------
    str
        Rendered index page
    """
    return render_template('index.html',
                           version=__version__)
