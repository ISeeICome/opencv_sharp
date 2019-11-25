const Jimp = require('jimp');
const cv = require('../opencv.js');
const test = async () => {
    const imageName = 'lena';
    const imageType = 'jpg';
    const jimpSrc = await Jimp.read(`./测试图集/${imageName}.png`);
    const src = cv.matFromImageData(jimpSrc.bitmap);
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    await outputImg(dst, `${imageName}-GaussianBlur.${imageType}`);
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