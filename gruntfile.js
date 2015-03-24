
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
		// Watch task
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
		//Uglify task
		uglify: {
			all: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.js'],
					dest: 'www',
					ext: '.js',
				}],
			},
		},
		//CSSmin task
		cssmin: {
			all: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.css'],
					dest: 'www',
					ext: '.css',
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
		'cssmin',
		'connect',
		'uglify',
		'watch'

	]);

	// LOAD
	// ================================================================

	// Automatically loading Grunt tasks
	require('load-grunt-tasks')(grunt);

};