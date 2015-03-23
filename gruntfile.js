
module.exports = function(grunt) {

	// CONFIG
	// ================================================================

	// Project configuration.
	grunt.initConfig({

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
		'jade'
	]);

	// LOAD
	// ================================================================

	// Automatically loading Grunt tasks
	require('load-grunt-tasks')(grunt);

};