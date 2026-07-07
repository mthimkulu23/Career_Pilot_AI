import requests

session = requests.Session()
# Assuming we have a test user or we can register one
res = session.post("http://localhost:5001/api/auth/register", json={
    "name": "Test",
    "surname": "Coach",
    "email": "testcoach@example.com",
    "password": "Password123!",
    "role": "candidate"
})
print("Register:", res.status_code, res.text)

# We might already be logged in after register. Let's login just in case.
res = session.post("http://localhost:5001/api/auth/login", json={
    "email": "testcoach@example.com",
    "password": "Password123!"
})
print("Login:", res.status_code, res.text)

# Hit the coach endpoint
res = session.post("http://localhost:5001/api/candidates/coach", json={
    "message": "How do I improve my resume?"
})
print("Coach:", res.status_code, res.text)
