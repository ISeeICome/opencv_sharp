const sharp = require('sharp');
const test = async () => {
    const imageName = 'lena';
    const imageType = 'jpg';
    var jimpSrc = await Jimp.read(`./测试图集/${imageName}.png`);
    var src = cv.matFromImageData(jimpSrc.bitmap);
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    let anchor = new cv.Point(-1, -1);
    cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
    await outputImg(dst, `${imageName}-blur.${imageType}`);
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