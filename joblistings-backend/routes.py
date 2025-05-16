from flask import Blueprint, request, jsonify
from models import Job
from database import db

routes = Blueprint('routes', __name__)

@routes.route('/jobs', methods=['GET'])
def get_jobs():
    sort_by = request.args.get('sort_by', default='id', type=str)
    filter_country = request.args.get('country')
    filter_city = request.args.get('city')
    filter_sector = request.args.get('sector')
    filter_experience = request.args.get('experience')
    filter_company = request.args.get('company')
    filter_title = request.args.get('title')
    page = request.args.get('page', default=1, type=int)
    per_page = request.args.get('per_page', default=5, type=int)

    query = Job.query

    if filter_country:
        query = query.filter(Job.country.ilike(f"%{filter_country}%"))
    if filter_city:
        query = query.filter(Job.city.ilike(f"%{filter_city}%"))
    if filter_sector:
        query = query.filter(Job.sector.ilike(f"%{filter_sector}%"))
    if filter_experience:
        query = query.filter(Job.experience.ilike(f"%{filter_experience}%"))
    if filter_company:
        query = query.filter(Job.company.ilike(f"%{filter_company}%"))
    if filter_title:
        query = query.filter(Job.title.ilike(f"%{filter_title}%"))

    if sort_by in ['title', 'company', 'country', 'city', 'sector', 'experience']:
        query = query.order_by(getattr(Job, sort_by).asc())

    pagination = query.paginate(page=page, per_page=per_page)
    jobs = [job.to_dict() for job in pagination.items]

    return jsonify({
        'jobs': jobs,
        'total': pagination.total,
        'page': pagination.page,
        'pages': pagination.pages
    })

@routes.route('/jobs', methods=['POST'])
def add_job():
    data = request.json
    job = Job(title=data['title'], company=data['company'], country=data['country'], city=data['city'], sector=data['sector'], experience=data['experience'])
    db.session.add(job)
    db.session.commit()
    return jsonify({'message': 'Job added successfully'}), 201

@routes.route('/jobs/<int:id>', methods=['DELETE'])
def delete_job(id):
    job = Job.query.get(id)
    if job:
        db.session.delete(job)
        db.session.commit()
        return jsonify({'message': 'Job deleted'}), 200
    return jsonify({'message': 'Job not found'}), 404
