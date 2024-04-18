// URL.createObjectURL

const oFile = document.getElementById('file');
oFile.onchange = async () => {
    handleFile(oFile.files[0])
}
function handleFile(file) {
    const video = document.createElement('video');
    const parent = document.querySelector('.content');
    video.src = URL.createObjectURL(file);
    video.oncanplay = async () => {
        var duration = video.duration;
        for (let i = 0; i < duration - 1; i++) {
            const { blob, url } = await captureVideoFrame(video, i);
            preview(parent,url);
        }
        URL.revokeObjectURL(video.src);
        video.remove();
    };
    
}
function preview(parent = document.body, url) {
    const oImg = document.createElement('img');
    oImg.src = url;
    oImg.width = 200;
    parent.appendChild(oImg);
}
/**
 * @param {HtmlVideoElement} video 
 * @param {Number} time
 * @returns {Object}
 */
async function captureVideoFrame(video, time = 0) {
    return new Promise((resolve, reject) => {
        video.currentTime = time;
        video.muted = true;
        video.oncanplay = () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(blob => {
                resolve({
                    blob,
                    url: URL.createObjectURL(blob)
                });
            }, 'image/png')
        }
        video.autoPlay = true;
    });
}