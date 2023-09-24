# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import Date, LargeBinary, DateTime, Enum
#
# db = SQLAlchemy()
#
#
# class Registration_data(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     first_name = db.Column(db.String(50))
#     father_name = db.Column(db.String(50))
#     last_name = db.Column(db.String(50))
#     birth_date = db.Column(Date)
#     enroll_date = db.Column(Date)
#     student_img = db.Column(LargeBinary(length=(1000000)))
#     country = db.Column(db.String(50))
#     city = db.Column(db.String(50))
#     district = db.Column(db.String(50))
#     house_number = db.Column(db.String(50))
#     email = db.Column(db.String(50))
#     # phone_number = db.Column(db.String(20))
#     # whatsapp_number = db.Column(db.String(20))
#     # skype_number = db.Column(db.String(50))
#     guardian_name = db.Column(db.String(50))
#     # guardian_relationship = db.Column(Enum('father', 'mother', 'brother', 'mamaa', name='guardian_relationship_enum'))
#     # guardian_email = db.Column(db.String(50))
#     # guardian_whatsapp = db.Column(db.String(50))
#     # subject_options = db.Column(
#     #     Enum('row-khowani', 'tajwid', 'hefz', 'tafsir', 'feqh', 'aqayed', name='subject_options_enum'))
#     # language_options = db.Column(Enum('persian', 'pashto', name='language_options'))
#     # classtime_options = db.Column(DateTime)
#     # findwhere_options = db.Column(
#     #     Enum('google', 'facebook', 'other_social_media', 'friends_invite', name='findwhereOptions'))
#
#     def __init__(self, **kwargs):
#         super(Registration_data, self).__init__(**kwargs)
