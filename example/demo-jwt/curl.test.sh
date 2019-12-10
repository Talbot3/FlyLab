
curl -X GET http://localhost:8000
# {"success":false,"message":"Auth token is not supplied"}

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"password":"password", "username":"admin"}' \
  http://localhost:8000/login
# {
#    "success":true,
#    "message":"Authentication successful!",   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68"
# }

curl -X GET \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTI1MTQwLCJleHAiOjE1MzUwMTE1NDB9.MIcWFBzAr5WVhbaSa1kd1_hmEZsepo8fXqotqvAerKI' \
  http://localhost:8000
# {
#     "success": true,
#     "message": "Index page"
# }