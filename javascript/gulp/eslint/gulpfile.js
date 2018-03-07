const gulp = require('gulp');
const eslint = require('gulp-eslint');
var eslintIfFixed = require('gulp-eslint-if-fixed');

gulp.task('lint', () => {
    // return gulp.src(['**/*.js','!node_modules/**'])
    return gulp.src(['**/*.js'])
        // .pipe(eslint({
        //     fix: true
        // }))
        .pipe(eslint())
        .pipe(eslint.format())
        // .pipe(eslintIfFixed('./'))
        .pipe(eslint.result(result => {
            // Called for each ESLint result.
            console.log(`ESLint result: ${result.filePath}`);
            console.log(`# Messages: ${result.messages.length}`);
            console.log(`# Warnings: ${result.warningCount}`);
            console.log(`# Errors: ${result.errorCount}`);
        }))
        .pipe(eslint.results(results => {
            // Called once for all ESLint results.
            console.log(`Total Results: ${results.length}`);
            console.log(`Total Warnings: ${results.warningCount}`);
            console.log(`Total Errors: ${results.errorCount}`);
        }))
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);
