module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
		  fullcss: {
		    src: ['mobile/css/libs.css','mobile/css/style.css'],
		    dest: 'mobile/css/full.css'
		  }
        },
        cssmin: {
        	options:{
				advanced: false,
				aggressiveMerging: false,
				benchmark: false,
				compatibility: false,
				debug: false,
				inliner: false,
				keepBreaks: true,
				keepSpecialComments: false,
				mediaMerging: false,
				processImport: false,
				processImportFrom: false,
				rebase: false,
				relativeTo: false,
				restructuring: false,
				root: false,
				roundingPrecision: false,
				semanticMerging: false,
				shorthandCompacting: false,
				sourceMap: false,
				sourceMapInlineSources: false
        	},
		  target: {
		    files: [{
		      src: 'mobile/css/style.css',
		      dest: 'mobile/css/style.min.css'
		    },
		    {
		      src: 'mobile/css/libs.css',
		      dest: 'mobile/css/libs.min.css'
		    },
		    {
		      src: 'mobile/css/full.css',
		      dest: 'mobile/css/full.min.css'
		    }]
		  }
		},
		uglify: {
		    options: {
				compress: {
		        	drop_console: true
		      	}
		    },
		    my_target: {
		      files: [{
			       	src: 'src/js/jquery/jquery.js',
			       	dest: 'src/js/jquery.min.js'
			    },
			     {
			       	src: 'src/js/init.js',
			       	dest: 'src/js/init.min.js'
			    },
			     {
			        src: 'src/js/libs.js',
			        dest: 'src/js/libs.min.js'
			    },
			     {
			       	src: 'src/js/main.js',
			       	dest: 'src/js/main.min.js'
			    },
			     {
			       	src: 'src/js/map.js',
			       	dest: 'src/js/map.min.js'
			    },
			     {
			       	src: 'src/mobile/js/jquery/jquery.js',
			       	dest: 'src/mobile/js/jquery.min.js'
			    },
			     {
			       	src: 'src/mobile/js/init.js',
			       	dest: 'src/mobile/js/init.min.js'
			    },
			     {
			        src: 'src/mobile/js/libs.js',
			        dest: 'src/mobile/js/libs.min.js'
			    },
			     {
			       	src: 'src/mobile/js/main.js',
			       	dest: 'src/mobile/js/main.min.js'
			    },
			     {
			       	src: 'src/mobile/js/map.js',
			       	dest: 'src/mobile/js/map.min.js'
			    }]
		    }
		  },
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'mobile/img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'mobile/img/'
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
		    src: 'src/img/',
		    dest: 'shtory/img',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      './node_modules/**',
		      './node_modules',
		      './.gitignore',
		      './src/css/libs',
		      './src/csrc/ss/libs/**',
		      './src/js/libs/**',
		      './src/js/libs',
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
		    src: './src/',
		    dest: 'public_html/shtory',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      './node_modules/**',
		      './node_modules',
		      './.gitignore',
		      './src/img/**',
		      './src/css/libs',
		      './src/css/libs/**',
		      './src/js/libs/**',
		      './src/js/libs',
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
		css_longhand: {
		    example: {
		        expand: true,
		        src: ['src/css/style.css','src/css/scripts.css'],  // Process all css files in the project root
		        dest: 'result/', // Output longhand css files in result/
		    },
		},
		autoprefixer: {
			options: {
				browsers: ['ie >= 8','last 10 versions','> 0.1%','ff >= 20','Android > 1']
			},
            dist: {
                files: [
	                {
	                    'mobile/css/full.css': 'mobile/css/full.css'
	                },
	                {
	                    'mobile/css/style.css': 'mobile/css/style.css'
	                },
	                {
	                    'mobile/css/libs.css': 'mobile/css/libs.css'
	                }
                ]
            }
        },
        watch: {
		    scripts: {
		        files: ['src/js/libs/*.js','src/js/init.js','src/js/main.js','src/js/libs/*.js','src/js/jquery/*.js','src/mobile/js/libs/*.js','src/mobile/js/init.js','src/mobile/js/main.js','src/mobile/js/libs/*.js','src/mobile/js/jquery/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
		    css: {
			    files: ['src/css/libs/*.css','src/css/style.css','src/css/scripts.css','src/mobile/css/libs/*.css','src/mobile/css/style.css','src/mobile/css/scripts.css'],
			    tasks: ['concat','cssmin'],
			    options: {
			        spawn: false,
			    }
			}//,
			//'ftp-deploy': {
			//	files: ['js/*.js','css/*.css','ajax/*.*','*.html','!**/node_modules/**'],
			//	tasks: ['ftp-deploy'],
			//	options: {
			//        spawn: false,
			//    },
			//},
			//ftpush: {
			//	files: ['img/*.*','!**/node_modules/**'],
			//	tasks: ['ftpush'],
			//	options: {
			//        spawn: false,
			//    },
			//}
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
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('fin', ['concat','autoprefixer','cssmin','imagemin']);
    grunt.registerTask('ftp', ['ftp-deploy','ftpush']);
    grunt.registerTask('css-long', ['css_longhand']);

};