
module.exports = function(grunt) {

	// CONFIG
	// ================================================================

	// Project configuration.
	grunt.initConfig({

		// Start and supervise web server using socket.io
		connect : {
			all: {
				options: {
					base: 'www',
					hostname: 'localhost',
					livereload: true,
					open: true,
					port: 8100,
				},
			},
		},

		watch: {
			options: {
					livereload: true,
				},
				html: {
				files: ['src/**/*.jade'],
				tasks: ['jade'],
				},
			},

		// Compile Jade templates
		jade: {
			all: {
				options: {
					client: false,
					pretty: false, 
					compileDebug: true,
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.jade',
					dest: 'www',
					ext: '.html',
				}],
			},
		},

		//Copy task
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*',
					dest: 'www',
				}],
			},
		},

		//Clean task
		clean: {
			all: ['www'],
		},

	});

	// REGISTER
	// ================================================================

	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'copy',
		'jade',
		'connect',
		'watch'

	]);

	// LOAD
	// ================================================================

	// Automatically loading Grunt tasks
	require('load-grunt-tasks')(grunt);

};