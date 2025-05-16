from database import db

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    company = db.Column(db.String(120))
    country = db.Column(db.String(120))
    city = db.Column(db.String(120))
    sector = db.Column(db.String(120))
    experience = db.Column(db.String(120))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'company': self.company,
            'country': self.country,
            'city': self.city,
            'sector': self.sector,
            'experience': self.experience
        }