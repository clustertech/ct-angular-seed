To set up dev environment

  1 Install node.js

    sudo apt-get install python-software-properties python
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

  2 Install node dependencies with npm (node.js package manager)

    sudo npm install

  3 Install grunt command line

    Grunt is a task-based command-line tool that speeds up workflows by reducing
    the effort required to prepare assets for production. It does this by
    wrapping up jobs into tasks that are compiled automatically as you go along.
    Basically, you can use Grunt on most tasks that you consider to be grunt
    work and would normally have to manually configure and run yourself.

    Link: http://gruntjs.com/

    gurnt-cli is the command line interface of grunt

    Link: https://github.com/gruntjs/grunt-cli

    sudo npm install -g grunt-cli

  4 Install bower

    Bower offers a generic, unopinionated solution to the problem of front-end
    package management, while exposing the package dependency model via an API
    that can be consumed by a more opinionated build stack. There are no system
    wide dependencies, no dependencies are shared between different apps, and
    the dependency tree is flat.

    Link: https://github.com/bower/bower

    sudo npm install -g bower

  5 install frontend dependencies

    grunt bower

To run with mock backend

  grunt dev

To get deploy version

  grunt deploy


To run unit test

  grunt karma

  Test coverage can be checked at ./coverage/index.html
-------------------------------------------------------------------------------

To set up e2e test environment

  1 Install jdk

     sudo apt-get install openjdk-7-jdk

  2 Install protractor

    npm install -g protractor

  3 Install browser driver

    sudo  /usr/local/lib/node_modules/protractor/bin/webdriver-manager update

  3 Run your web application's http server

  4 Runt e2e test

    protractor test/protractor-conf.js


