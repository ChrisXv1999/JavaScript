const {execSync} = require('node:child_process');
// ffmpeg -i test.mp4 -vf "movie=logo.jpg[wm];[in][wm]overlay=30:10[out]" image_out.mp4
execSync('ffmpeg -i  demo.mp4 -vf movie="test.png[wm];[in][wm]overlay=500:50[out]" image_out.mp4',{stdio:'inherit'})