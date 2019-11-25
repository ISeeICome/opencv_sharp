const Jimp = require('jimp');
const cv = require('./opencv.js');

const test = async () => {
    const jimpSrc = await Jimp.read('../测试图集/lena.jpg'); 
    console.log(11);
    const src = cv.matFromImageData(jimpSrc.bitmap);
console.log('image width: ' + src.cols + '\n' +
            'image height: ' + src.rows + '\n' +
            'image size: ' + src.size().width + '*' + src.size().height + '\n' +
            'image depth: ' + src.depth() + '\n' +
            'image channels ' + src.channels() + '\n' +
            'image type: ' + src.type() + '\n');
}
test();