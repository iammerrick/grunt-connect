# grunt-connect

Run a connect server, indefinitely. The built in Grunt server task is terrific for the great majority of cases, however sometimes you just want to ability to run a web server on a local file system and interact with the files using a web browser.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-connect`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-connect');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

Since, these tasks are essentially asynchronous tasks that don't close. It's best to target them directly. For example, given the following configuration:

```javascript
grunt.initConfig({
  connect: {
    example: {
      port: 1337,
      base: 'example'
    },
    meta: {
      port: 1338,
      base: 'tasks'
    }
  }
});
```

One might target the meta server using `grunt connect:meta`

## License
Copyright (c) 2012 Merrick Christensen  
Licensed under the MIT license.
