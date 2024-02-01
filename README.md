# Local Line Frontend Dev Challenge

## Challenge

The goal of this exercise is to showcase your frontend skillset by building the requirements below. This repository contains the following:

- A /src/app/page.js that houses the app screen
- A package.json with a list of packages to install
- A /components folder where reusable components should be imported from
- A /src/app/globals.css which contains default element styles - please edit them as you see fit

To complete the challenge, please perform the following:

1. Fork the repository to your personal github account.
2. View the Figma design [here](https://www.figma.com/file/DyE74I3fWWeZNZzu1RWyIq/Local-Line-Frontend-Dev-Evaluation?type=design&node-id=1%3A2742&mode=dev&t=0zNyFmCEtbI8moF9-1)
3. Fetch the order to be displayed from `https://vop4f76uc3.execute-api.us-east-1.amazonaws.com`
4. Map the data into an implementation of the design.
5. Collect the user's note input and patch it back to the endpoint `https://vop4f76uc3.execute-api.us-east-1.amazonaws.com` with basic credentials provided by us.
6. Once you've completed the work, push it to your forked repository, and submit a pull request to this repository. Please email us with a link to your pull request once completed.

## Evaluation Criteria

1. Creation of React components, reusable patterns and separation of concerns
2. Attention to detail from the Figma Design
3. Orders are generated from provided endpoint
4. Use of Tailwind CSS (optional)

## Running Locally

1. In terminal navigate to the root of the challenge folder and install with the command `yarn`
   - If you do not have yarn please install it from [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
2. To start the solution run the command `yarn start`
