const Jimp = require('jimp');
const cv = require('../opencv.js');
const test = async () => {
    const imageName = 'lena';
    const imageType = 'jpg';
    var jimpSrc = await Jimp.read(`./测试图集/${imageName}.png`);
    var src = cv.matFromImageData(jimpSrc.bitmap);
    let dst = new cv.Mat();
    cv.medianBlur(src, dst, 5);
    await outputImg(dst, `${imageName}-medianBlur.${imageType}`);
    src.delete();
    dst.delete();
}

outputImg = (dst, Img) => {
  new Jimp({
      width: dst.cols,
      height: dst.rows,
      data: Buffer.from(dst.data)
  }).write(Img);
}

test();