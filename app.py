from flask import Flask, render_template
import datetime

app = Flask(__name__)


def convert_to_arabic_numerals(year):
    arabic_numerals = {
        '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
        '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
    }
    return ''.join(arabic_numerals[char] for char in year)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('other_pages/404-page.html')


@app.route('/q&a')
@app.route('/library')
def qa_library():
    return render_template('other_pages/coming-soon.html')


@app.route('/register')
def register_form():
    return render_template('other_pages/register-form.html')


@app.route('/')
@app.route('/home')
def index():
    current_year = datetime.datetime.now().strftime('%Y')
    current_year_arabic = convert_to_arabic_numerals(current_year)
    return render_template('index.html', current_year=current_year_arabic)


if __name__ == '__main__':
    app.run()
