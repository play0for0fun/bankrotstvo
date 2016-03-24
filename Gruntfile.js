module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
           js: {
		    src: 'js/libs/*.js',
		    dest: 'js/libs.js'
		  },
		  css: {
		    src: 'css/libs/*.css',
		    dest: 'css/libs.css'
		  }
        },
        cssmin: {
		  target: {
		    files: [{
		      src: 'css/style.css',
		      dest: 'css/style.min.css'
		    },
		    {
		      src: 'css/libs.css',
		      dest: 'css/libs.min.css'
		    }]
		  }
		},
        uglify: {
		    build: {
		        src: 'js/libs.js',
		        dest: 'js/libs.min.js'
		    }
		},
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'img/'
		        }]
		    }
		},
		ftpush: {
		  build: {
		    auth: {
		      host:'31.170.165.128',
		      //host:'ftp.webdone.xyz',
		      port:21,
		      authKey:"key2"		      
		    },
		    src: 'img/',
		    dest: 'dolhi/img',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      './node_modules/**',
		      './node_modules',
		      './.gitignore',
		      './css/libs',
		      './css/libs/**',
		      './js/libs/**',
		      './js/libs',
		      '.editorconfig',
		      '.ftppass',
		      '.grunt',
		      './.git/**',
		      './.git',
		      '.jshintrc',
		      'package.json',
		      'for_terminal',
		      'Gruntfile.js'
		    ]
		  }
		},
		'ftp-deploy': {
		  build: {
		    auth: {
		      host:'31.170.165.128',
		      //host:'ftp.webdone.xyz',
		      port:21,
		      authKey:'key2'		      
		    },
		    src: './',
		    dest: 'public_html/dolhi',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      './node_modules/**',
		      './node_modules',
		      './.gitignore',
		      './img/**',
		      './css/libs',
		      './css/libs/**',
		      './js/libs/**',
		      './js/libs',
		      '.editorconfig',
		      '.ftppass',
		      '.grunt',
		      './.git/**',
		      './.git',
		      '.jshintrc',
		      'package.json',
		      'for_terminal',
		      'Gruntfile.js'
		    ]
		  }
		},
		autoprefixer: {
            dist: {
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        watch: {
		    scripts: {
		        files: ['js/libs/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
		    css: {
			    files: ['css/libs/*.css'],
			    tasks: ['concat','cssmin'],
			    options: {
			        spawn: false,
			    }
			},
			'ftp-deploy': {
				files: ['js/*.js','css/*.css','ajax/*.*','*.html','!**/node_modules/**'],
				tasks: ['ftp-deploy'],
				options: {
			        spawn: false,
			    },
			},
			ftpush: {
				files: ['img/*.*','!**/node_modules/**'],
				tasks: ['ftpush'],
				options: {
			        spawn: false,
			    },
			}
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','uglify','cssmin','watch']);
    grunt.registerTask('fin', ['autoprefixer','concat','uglify','cssmin','imagemin']);
    grunt.registerTask('ftp', ['ftp-deploy','ftpush']);

};