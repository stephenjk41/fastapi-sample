# fastapi-sample
Fast API Sample Project


# This project uses anaconda3 and conda enviornments

## 1. To use conda make sure you have anaconda3 and git bash installed
## 2. Make sure bash has access to conda
- Open {Wherever anaconda is located} > anaconda3 > etc > profile.d in git bash
- Type in this command: ```echo ". ${PWD}/conda.sh" >> ~/.bashrc``` or ```$ echo ". '${PWD}'/conda.sh" >> ~/.bashrc```
- Open the project in git bash and type in ```conda env create -f resources/envoirnment.yml```
- Then type ``` conda activate fastapi-sample-dev ``` to activate the enviornment

