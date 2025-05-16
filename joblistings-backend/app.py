from database import create_app, db
from routes import routes
from flask_cors import CORS

app = create_app()
CORS(app)
app.register_blueprint(routes)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)