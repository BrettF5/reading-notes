# Class-03 Reading Notes: Revisions and the Cloud

## What I learned:
GIT is a distributed version control system (VCS) that can track/record changes in file to help coordinate work between users that are together working on a project/program/file. This will help track the project/program/file during its evolution. Users can see changes each user has made being able to see a snapshot of the life cycle of the project/program/file development.

## GIT has three mains states:

- Staged - You have noted the modified file to it current version to get it ready for a commit
- Modified - The file has been changed but not committed to your database
- Committed - Data is stored in you local database

### What is Version Control?
It is a system that allows a user to revist various version of a file or set of files by recording changes. This enable a user to track and compare changes made by other users.

### What is cloning in Git?
It allows a user to copy and existing git repository from a server by using the clone command.
* `$ git clone https://github.com/test`

### What is the command to track and stage files?
* Single File = `git add filename`
* All Files = `git add *`

### What is the command to take a snapshot of your changed files?
* `git commit -m "made change x,y,z"`

### What is the command to send your changed files to Github?
* `git push origin main`


