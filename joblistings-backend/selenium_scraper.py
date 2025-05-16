from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from models import Job
from database import create_app, db

app = create_app()

def scrape_jobs():
    driver = webdriver.Chrome()
    driver.get("https://remoteok.io/")
    time.sleep(5)

    jobs = driver.find_elements(By.CLASS_NAME, 'job')[:5]

    with app.app_context():
        for job in jobs:
            try:
                title = job.find_element(By.CLASS_NAME, 'company_and_position').text
                company = job.find_element(By.CLASS_NAME, 'company').text
                country = job.find_element(By.CLASS_NAME, 'country').text
                city = job.find_element(By.CLASS_NAME, 'city').text
                sector = job.find_element(By.CLASS_NAME, 'sector').text
                experience = job.find_element(By.CLASS_NAME, 'experience').text
                new_job = Job(title=title, company=company, country=country, city=city, sector=sector, experience=experience)
                db.session.add(new_job)
            except:
                continue
        db.session.commit()
    driver.quit()

if __name__ == '__main__':
    scrape_jobs()
