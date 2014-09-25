/*!
 * FireShell Gruntfile
 * http://getfireshell.com
 * @author Todd Motto
 */

'use strict';

/**
 * Grunt module
 */
module.exports = function (grunt) {

	/**
	 * Dynamically load npm tasks
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	/**
	 * FireShell Grunt config
	 */
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Set project info
		 */
		project: {
			src: 'wp-content/themes/webframework/src',
			app: 'wp-content/themes/webframework',
			assets: '<%= project.app %>',
			css: [
				'<%= project.src %>/scss/app.scss'
			],
			js: [
				'<%= project.src %>/js/*.js'
			]
		},

		/**
		 * Project banner
		 * Dynamically appended to CSS/JS files
		 * Inherits text from package.json
		 */
		tag: {
			banner: '/*!\n' +
							' * <%= pkg.name %>\n' +
							' * <%= pkg.title %>\n' +
							' * <%= pkg.url %>\n' +
							' * @author <%= pkg.author %>\n' +
							' * @version <%= pkg.version %>\n' +
							' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
							' */\n'
		},

		/**
		 * Compile Sass/SCSS files
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Compiles all Sass/SCSS files and appends project banner
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded',
					require: ['breakpoint', 'susy']
				},
				files: {
					'<%= project.assets %>/css/app.css': '<%= project.css %>'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					debugInfo: true,
					require: ['breakpoint', 'susy']
				},
				files: {
					'<%= project.assets %>/css/app.css': '<%= project.css %>'
				}
			}
		},

		/**
		 * Runs tasks against changed watched files
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watching development files and run concat/compile tasks
		 * Livereload the browser once complete
		 */
		watch: {
			sass: {
				files: [
					'<%= project.src %>/scss/{,*/}*.{scss,sass}'
			],
			php: {
				files: ['*.php', '<%= project.assets %>/{,*/}*.php'],
			},
				tasks: ['sass:dev']
			},
			options: {
				livereload: true
			}
		}
	});

	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', [
		'sass:dev',
		'watch'
	]);

	/**
	 * Build task
	 * Run `grunt build` on the command line
	 * Then compress all JS/CSS files
	 */
	grunt.registerTask('build', [
		'sass:dist'
	]);

};
