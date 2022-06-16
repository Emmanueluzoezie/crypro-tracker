Coin Tracker is a project for tracking the price of today's' cryptocurrency prices and news update on cryptocurrency.

## Getting Started

First,

1. Install git
   Git logo

Git is a version control system that is used for tracking changes in a file. Git is an imporant tool we'll be using to work on our github projects. If you want to learn how to install git without any errors, follow this tutorial, if not, install it and move on to the next step.

2. Fork this repository.

Fork this repository using the fork button on the top right of this page, or the pencil icon on the right. This will create a copy of the project with your name. 3. Clone your fork.

Cloning a project is simply taking that project and making a copy on your local machine. To clone this project, click the button on green that says code and on the drop down box, copy the URL of the project in the box and open up your git bash terminal and type in the following command `git clone "URL you just copied`
It should look like this:

git clone https://github.com/Emmanueluzoezie/coin-tracker.git
Where "your_name" will be your username on GitHub. Running this command will clone the project in your local machine.

3. Switch directory
   Next switch into the folder of the repo we just cloned by typing this command in your bash terminal:

cd <repository name>
cd stands for "change directory" and the repository name is the name of the project repo: coin-tracker therefore the command will be cd coin-tracker

4. install npm or yarn into the project

```
npm install git
# or
yarm add
```

5. Point origin branch to upstream
   We need to point our forked repo(origin) to the upstream(source) repo: To do that, type the command

git remote add upstream <URL of source repo>
git remote add upstream https://github.com/Emmanueluzoezie/coin-tracker.git

6. Create branch
   Now we have successfully pointed our origin repo to upstream, we can now create a new branch which we'll be making our changes from. To create a branch, type the command:

git checkout -b <branch name>
You can name the branch anything you want, but for the sake of this project, name your branch add-yourname (replace yourname with your own name). E.g git checkout -b my-branch

7. Make your changes.
   Enter the project and make your changes

8. run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page. adding your own code inside the project.

9. git status
   This will show us a list of all changes made.

Next do a git add .(period) which means, add every changes made.

git add .
Now we can write our commit message.

git commit -m 'write your changes'

10. Push changes to GitHub
    Now we have sucessfully added our profile, we can now push the changes to GitHub. Use the command below to do that.

git push origin <branch name>
