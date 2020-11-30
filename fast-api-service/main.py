from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .routers import sample_route

import pkg_resources

import os

from pathlib import Path

# Absolute file path for static files
parent_dir_path = os.path.dirname(os.path.realpath(__file__))

app = FastAPI()
app.include_router(sample_route.router)

app.mount("/static", StaticFiles(directory=pkg_resources.resource_filename(__name__, 'static')), name="static")

@app.get("/")
async def root():
    return {"message": "Hello World"}