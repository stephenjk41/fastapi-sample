import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name='fastapi-sample',
    version='0.0.0',
    author='Stephen Katz',
    long_description=long_description,
    packages=setuptools.find_packages()
)