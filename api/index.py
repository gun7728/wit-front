from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
def hello_world():
  return {"message": "Hello World"}


@app.get("/api/python")
def hello_world():
  return {"message": "Hello Python"}
