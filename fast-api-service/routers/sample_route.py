from fastapi import APIRouter

import os
import json

router = APIRouter()

@router.post('/test')
async def test_router():
    result = {'message': "hello world"}
    return result

@router.get('/send_loader_config')
async def send_loader_config():
    path = os.path.abspath("fast-api-service/routers/threejs_example.json")
    with open(path, 'r') as fp:
        data = json.load(fp)
        return data