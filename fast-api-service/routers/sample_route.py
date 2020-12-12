from fastapi import APIRouter

router = APIRouter()

@router.post('/test')
async def test_router():
    result = {'message': "hello world"}
    return result