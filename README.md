Web Framework
=============

The project dependencies are

- [Ruby](https://www.ruby-lang.org/en/)
- [Node.js](http://nodejs.org/)
- [Grunt Task Manager](http://gruntjs.com/getting-started)
- [Sass](http://http://sass-lang.com//)
- [Glue](http://glue.readthedocs.org/en/latest/)

## Ruby Programming Language

__Sass__ is based on __Ruby__. If you don't already have Ruby installed, we recommand using [rbenv](https://github.com/sstephenson/rbenv) to install it.

On __OSX__, it's as easy as

	# Install rbenv
	brew update
	brew install rbenv ruby-build

	# Install ruby version 2.0.0-p353
	rbenv install 2.0.0-p353

	# Sets the global version of Ruby to be used in all shells
	rbenv global 2.0.0-p353

On __Windows__, it's as easy as

* Download the [Ruby Installer](http://rubyinstaller.org/)
* When installing Ruby using the installer, you are given the option **"Add Ruby executable to your PATH"**. Please do that. If not, you will have to add Ruby PATH manualy.

----------

## Node.js

On __OX X__

Please use [nvm](https://github.com/creationix/nvm) for installing __Node__, it will make your life much easier.

	# install nvm
	curl https://raw.github.com/creationix/nvm/master/install.sh | sh

	# install latest version of node
	nvm install 0.10

	# Make sure we use it in every shell
	nvm use 0.10
	nvm alias default 0.10

On __Windows__

	# Install using the installer (.msi) from http://nodejs.org/
	# Make sure the Node package manager is installed by typing ‘npm’ and hitting enter from Command Prompt

> In case you’ve installed Grunt before it’s recommend that you remove it and start afresh.
npm uninstall -g grunt

---------

## Grunt

On __OS X__ and  __Windows__

The project is using the __Grunt__ task manager to manage all the aspects of the front end components, make sure you install it globally.

	npm install -g grunt-cli

---------

## Glue

http://glue.readthedocs.org/en/latest/installation.html

For HearPlay Project the task is:

	glue --source=wp-content/themes/webframework/src/img/_sprites --img=wp-content/themes/webframework/img --scss=wp-content/themes/webframework/src/scss/modules --url=../img/ --namespace=ic --sprite-namespace= --sprite-separator=_ --scss-template=template.jinja --ratios=2,1 --padding=2 --watch
