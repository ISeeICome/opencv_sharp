const Jimp = require('jimp');
const cv = require('../opencv.js');
const test = async () => {
    const imageName = 'lena';
    const imageType = 'jpg';
    var jimpSrc = await Jimp.read(`./测试图集/${imageName}.png`);
    var src = cv.matFromImageData(jimpSrc.bitmap);
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
    cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
    await outputImg(dst, `${imageName}-bilateralFilter.${imageType}`);
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