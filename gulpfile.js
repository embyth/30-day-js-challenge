const gulp = require(`gulp`);
const browserSync = require(`browser-sync`).create();

gulp.task(`server`, (done) => {
  browserSync.init({
    server: {
      baseDir: `./source/`
    },
    notify: false,
    open: true,
    cors: true,
    ui: false,
    reloadOnRestart: true,
    // online: false, // Work offline without internet connection
    // tunnel: true, // tunnel: `projectname`, // Demonstration page: http://projectname.localtunnel.me
  });

  done();
});

gulp.task(`watch`, () => {
  gulp.watch(`./source/**/*.html`).on(`all`, browserSync.reload);
  gulp.watch(`./source/**/*.js`).on(`all`, browserSync.reload);
  gulp.watch(`./source/**/*.css`).on(`all`, browserSync.stream);
  gulp.watch(`./source/**/*.{jpg,jpeg,png,svg,webp}`).on(`all`, browserSync.reload);
});

gulp.task(`default`, gulp.series(`server`, `watch`));
