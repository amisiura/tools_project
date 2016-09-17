module.exports = function(grunt) {




    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

         project: {
        //     buildDir: 'public',
             version: +new Date()
         },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/app.js',
                dest: 'app/app.min.js'
            }
        },

        concat: {
            options: {
                separator: ';',
            },


            js: {
                src: ['app/*.js'],
                dest: 'app/app.js',
            },
        },


        less: {
            options: {
                paths: [ 'css' ],
                compress: {},
                report: 'min',
                sourceMap: true
            },

            production: {
                files: {
                    '<%= project.buildDir %>/app.css': ['css/*.less' ]
                }
            }
        },

        watch: {

            options:{
                livereload:true
            },

            less: {
                  files: "css/*",
                  tasks: ["less"]
            },

            js: {
                files: "app/*",
                tasks: ["js", "clean:afterminjs"]
            }
        },

        jshint: {

            project: {
                options: {
                    jshintrc: '.jshintrc'
                },

                files: {
                    src: [ 'js/**/*.js' ]
                }
            }

        },


        clean: {
            build: {
                src: ["<%= project.buildDir %>"]
            },

            afterminjs: {
                src: ["<%= project.buildDir %>/app.js"]
            }
        },

        copy: {
            html: {
                expand: true,
                src: ['temp.html'],
                dest: '<%= project.buildDir %>/',
                rename: function(dest, src) {
                    // use the source directory to create the file
                    // example with your directory structure
                    //   dest = 'dev/js/'
                    //   src = 'module1/js/main.js'
                    return '<%= project.buildDir %>/index.html';
                }
            },
            img: {
                expand: true,
                src: ['img/*.*'],
                flatten: true,
                dest: '<%= project.buildDir %>/img'
            }
        }



    });



    // 3. Сообщаем, какие плагины мы собираемся использовать

    // for less to css compiling
    grunt.loadNpmTasks('grunt-contrib-less');

    // watcher for files changing
    grunt.loadNpmTasks('grunt-contrib-watch');

    // for cleaning directories
    grunt.loadNpmTasks('grunt-contrib-clean');

    // for copy directories
    grunt.loadNpmTasks('grunt-contrib-copy');

    // for conating js files
    grunt.loadNpmTasks('grunt-contrib-concat');

    // for minifying js files
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // for jshint testing
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // for creating sprites
    grunt.loadNpmTasks('grunt-spritesmith');

    // for post processing css
    grunt.loadNpmTasks('grunt-postcss');

    // load our custom task
//    grunt.loadTasks('tools/task');

    // 4. Определяем задачу по умолчанию, которая будет выполняться при запуске команды grunt в терминале.
    grunt.registerTask('js', ['concat', 'uglify', 'clean:afterminjs']);

    grunt.registerTask('css', ['less']);


    grunt.registerTask('default', ['concat', 'js',  'css', 'copy']);

};