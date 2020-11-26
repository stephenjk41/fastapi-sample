from fastapi import APIRouter

router = APIRouter()

@router.get('/test')
async def test_router():
    return {"message": "Hello World from a router"}