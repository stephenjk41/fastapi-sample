from fastapi import FastAPI
from .routers import sample_route

app = FastAPI()
app.include_router(sample_route.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}