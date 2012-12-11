/*
 * grunt-connect
 * https://github.com/iammerrick/grunt-connect
 *
 * Copyright (c) 2012 Merrick Christensen
 * Licensed under the MIT license.
 */
/*jshint es5:true*/

var connect = require('connect');
var path = require('path');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('connect', 'Run a simple static connect server till you shut it down.', function() {
    // Don't ever close this task!
    this.async();
    
    var port = this.data.port || 1337;
    var base = path.resolve(this.data.base || '.');
    
    grunt.log.success('Opening server for ' + base+ ' on port ' + port + '.');
    connect(
      connect.static(base),
      connect.directory(base)
    ).listen(port);
    
  });
};
