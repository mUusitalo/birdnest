# Birdnest
Submission to Reaktor's summer 2023 Developer Trainee pre-assignment.

[Live demo](https://polished-dust-8216.fly.dev/)

## Tools and technologies
Due to the simple and well-scoped nature of the assignment, this app runs on NodeJS, with the lone dependency of an XML parser.

## Technical decisions
All data is stored on the server in memory. If it shuts down for some reason, NDZ violators will be lost from the last 10 minutes.

## Hosting
The app is hosted on Fly.io due to their free hosting allowances.
