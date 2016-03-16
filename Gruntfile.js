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
		    	host:'31.170.164.107',
		      //host:'ftp.webdone.xyz',
		      port:21,
		      authKey:
		      {
		      	"username": "u317388967",
    			"password": "gfgfkjd10"}
		      },
		    src: '',
		    dest: 'public_html/dolhi',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      '**/node_modules/**',
		      '**/.gitignore',
		      '.editorconfig',
		      '.ftppass',
		      '.grunt',
		      '**/.git/**',
		      '.jshintrc',
		      'package.json',
		      'for_terminal',
		      'Gruntfile.js'
		    ],
		    keep: [],
		    simple: true
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
			ftpush: {
				files: ['**/*','!**/node_modules/**'],
				tasks: ['ftpush']
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

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','uglify','cssmin','watch']);
    grunt.registerTask('fin', ['autoprefixer','concat','uglify','cssmin','imagemin']);

};