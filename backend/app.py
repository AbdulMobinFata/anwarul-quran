from flask import Flask, render_template
import datetime
# from models.database import Registration_data
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI']='mysql://anwarul-quran:fataMysqLpjr123$@localhost/anwarul_quran?charset=utf8mb4'
# db = SQLAlchemy(app)


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


@app.route('/register-form')
def register_form():
    return render_template('other_pages/register-form.html')


# @app.route('/registration', methods=['POST'])
# def new_inputs():
#     if request.method == 'POST':
#         try:
#             first_name = request.form['firstName']
#             father_name = request.form['fatherName']
#             last_name = request.form['lastName']
#             birth_date = request.form['birthDate']
#             enroll_date = request.form['enrollDate']
#             student_img_file = request.files['studentImg']
#             if student_img_file:
#                 student_img_data = student_img_file.read()
#             country = request.form['country']
#             city = request.form['city']
#             district = request.form['district']
#             house_number = request.form['houseNumber']
#             email = request.form['email']
#             phone_number = request.form['phoneNumber']
#             whatsapp_number = request.form['whatsappNumber']
#             skype_number = request.form['skypeNumber']
#             guardian_name = request.form['guardianName']
#             guardian_relationship = request.form['guardianRelationship']
#             guardian_email = request.form['guardianEmail']
#             guardian_whatsapp = request.form['guardianWhatsapp']
#             subject_options = request.form['subjectOptions']
#             language_options = request.form['languageOptions']
#             classtime_options = request.form['classtimeOptions']
#             findwhere_options = request.form['findwhereOptions']
#
#             errors = []
#             if errors:
#                 return jsonify({'error': ', '.join(errors)}), 400
#
#             new_input = Registration_data(
#                 first_name=first_name,
#                 father_name=father_name,
#                 last_name=last_name,
#                 birth_date=birth_date,
#                 enroll_date=enroll_date,
#                 student_img=student_img_data,
#                 country=country,
#                 city=city,
#                 district=district,
#                 house_number=house_number,
#                 email=email,
#                 phone_number=phone_number,
#                 whatsapp_number=whatsapp_number,
#                 skype_number=skype_number,
#                 guardian_name=guardian_name,
#                 guardian_relationship=guardian_relationship,
#                 guardian_email=guardian_email,
#                 guardian_whatsapp=guardian_whatsapp,
#                 subject_options=subject_options,
#                 language_options=language_options,
#                 classtime_options=classtime_options,
#                 findwhere_options=findwhere_options
#             )
#
#             db.session.add(new_input)
#             db.session.commit()
#
#             return jsonify({'message': 'Registration successful'}), 200
#         except Exception as e:
#             db.session.rollback()
#             return str(e)
#
#     return "Invalid request method"


@app.route('/')
@app.route('/home')
def index():
    current_year = datetime.datetime.now().strftime('%Y')
    current_year_arabic = convert_to_arabic_numerals(current_year)
    return render_template('index.html', current_year=current_year_arabic)


if __name__ == '__main__':
    app.run(debug=True)
