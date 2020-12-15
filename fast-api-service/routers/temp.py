import pkg_resources
import json
import os
from pathlib import Path

path = os.path.abspath("fast-api-service/routers/threejs_example.json")
print(path)
with open(path, 'r') as fp:
    data = json.load(fp)
    print(data)