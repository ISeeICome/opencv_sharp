const Jimp = require('jimp');
const cv = require('../opencv.js');

const testSize = async () => {
    const imageName = "tower";
    const imageType = "jpg";
    const jimpSrc = await Jimp.read(`./测试图集/${imageName}.JPG`);
    const src = cv.matFromImageData(jimpSrc.bitmap);
    const dst = new cv.Mat();
    const dsize = new cv.Size(100, 100);
    let prevTime;
    let diffTime;
    
    prevTime = (new Date()).getTime();
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_NEAREST);
    await outputImg(dst, `${imageName}-INTER_NEAREST.${imageType}`)
    diffTime = (new Date()).getTime() - prevTime;
    console.log("INTER_NEAREST", diffTime);
    
    prevTime = (new Date()).getTime();
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_LINEAR);
    await outputImg(dst, `${imageName}-INTER_LINEAR.${imageType}`)
    diffTime = (new Date()).getTime() - prevTime;
    console.log("INTER_LINEAR", diffTime);

    prevTime = (new Date()).getTime();
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_CUBIC);
    await outputImg(dst, `${imageName}-INTER_CUBIC.${imageType}`)
    diffTime = (new Date()).getTime() - prevTime;
    console.log("INTER_CUBIC", diffTime);

    prevTime = (new Date()).getTime();
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
    await outputImg(dst, `${imageName}-INTER_AREA.${imageType}`)
    diffTime = (new Date()).getTime() - prevTime;
    console.log("INTER_AREA", diffTime);

    prevTime = (new Date()).getTime();
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_LANCZOS4);
    await outputImg(dst, `${imageName}-INTER_LANCZOS4.${imageType}`)
    diffTime = (new Date()).getTime() - prevTime;
    console.log("INTER_LANCZOS4", diffTime);

    // prevTime = (new Date()).getTime();
    // cv.resize(src, dst, dsize, 0, 0, cv.INTER_MAX);
    // await outputImg(dst, 'INTER_MAX.png')
    // diffTime = (new Date()).getTime() - prevTime;
    // console.log("INTER_MAX", diffTime);

    // prevTime = (new Date()).getTime();
    // cv.resize(src, dst, dsize, 0, 0, cv.WARP_FILL_OUTLIERS);
    // await outputImg(dst, 'WARP_FILL_OUTLIERS.png')
    // diffTime = (new Date()).getTime() - prevTime;
    // console.log("WARP_FILL_OUTLIERS", diffTime);

    // prevTime = (new Date()).getTime();
    // cv.resize(src, dst, dsize, 0, 0, cv.WARP_INVERSE_MAP);
    // await outputImg(dst, 'WARP_INVERSE_MAP.png')
    // diffTime = (new Date()).getTime() - prevTime;
    // console.log("WARP_INVERSE_MAP", diffTime);

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
testSize()