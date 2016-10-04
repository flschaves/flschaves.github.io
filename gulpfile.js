var gulp = require( 'gulp' );
var stylus = require( 'gulp-stylus' );

gulp.task( 'default', function(){
	// default task
});

gulp.task( 'css', function() {
	gulp.src( './assets/css/stylus/main.styl' )
		.pipe( stylus() )
		.pipe( gulp.dest( './assets/css/' ) );
});

gulp.task( 'watch', function(){

	// Watch css changes
	gulp.watch( 'assets/css/stylus/**/*.styl', ['css'] );
});