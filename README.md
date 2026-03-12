# Teo-Test-Repo



1st set of Changes

1. I have created a test remote Repository in GitHub(on the server)

2\. I have cloned the remote repository to my local device

3\. The changes I have made on my local device are adding text to this file



2nd set of changes

This is the git commands I used to clone and push my changes back to the remote repository



--clone the repo

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo

$ git clone https://github.com/Teolan432/Teo-Test-Repo.git

Cloning into 'Teo-Test-Repo'...

remote: Enumerating objects: 3, done.

remote: Counting objects: 100% (3/3), done.

remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)

Receiving objects: 100% (3/3), done.





--learnt the repo is not a git hub repository

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo

$ git status

fatal: not a git repository (or any of the parent directories): .git





--changed my directory to the GitHub repo - from /GitHub-test-Teo to /GitHub-test-Teo/Teo-Test-Repo

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo

$ cd Teo-Test-Repo





--this lists the contents of the current directory

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ ls

README.md



--I reinitialized the repo

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git init

Reinitialized existing Git repository in C:/Users/Teolan Govender/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo/.git/



--this stages changes, telling Git to include these changes in the next commit

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git add .



--Git required me to in a sense log in

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git commit -m "updated readme - first commit"

Author identity unknown



\*\*\* Please tell me who you are.



Run



  git config --global user.email "you@example.com"

  git config --global user.name "Your Name"



to set your account's default identity.

Omit --global to set the identity only in this repository.



fatal: unable to auto-detect email address (got 'Teolan Govender@LAPTOP-4KISL5TR.(none)')



Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git config --global user.name "Teolan Govender"



Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git config --global user.email "teolan.govender@sambeconsulting.com"



--here I sent my commit with a commit message to my local repo

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git commit -m "updated readme - first commit"

\[main bbd19ac] updated readme - first commit

 1 file changed, 12 insertions(+), 1 deletion(-)





--here I pushed my local repo to my remote repo

Teolan Govender@LAPTOP-4KISL5TR MINGW64 ~/OneDrive - Northern Data (Pty) Ltd/Documents/GitHub-test-Teo/Teo-Test-Repo (main)

$ git push -u origin main

info: please complete authentication in your browser...

Enumerating objects: 5, done.

Counting objects: 100% (5/5), done.

Delta compression using up to 16 threads

Compressing objects: 100% (2/2), done.

Writing objects: 100% (3/3), 427 bytes | 427.00 KiB/s, done.

Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)

To https://github.com/Teolan432/Teo-Test-Repo.git

   2fa5036..bbd19ac  main -> main

branch 'main' set up to track 'origin/main'.





3rd changes

what to do next - when you make an update run the following commands to push the update to the remote repository



git status

git add .

git commit -m "message"

git push

