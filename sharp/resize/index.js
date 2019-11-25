const sharp = require('sharp');

const imageName = "DJI_0966";
const src = "./测试图集/DJI_0966.JPG";
// const nearestTime = 

const test = async () => {
    let prevTime;
    let diffTime; 
    prevTime = (new Date()).getTime();
    await outputFile(src, sharp.kernel.nearest);
    diffTime = (new Date()).getTime() - prevTime;
    console.log("nearest", diffTime);

    prevTime = (new Date()).getTime();
    await outputFile(src, sharp.kernel.cubic);
    diffTime = (new Date()).getTime() - prevTime;
    console.log("cubic", diffTime);

    prevTime = (new Date()).getTime();
    await outputFile(src, sharp.kernel.mitchell);
    diffTime = (new Date()).getTime() - prevTime;
    console.log("mitchell", diffTime);

    prevTime = (new Date()).getTime();
    await outputFile(src, sharp.kernel.lanczos2);
    diffTime = (new Date()).getTime() - prevTime;
    console.log("lanczos2", diffTime);

    prevTime = (new Date()).getTime();
    await outputFile(src, sharp.kernel.lanczos3);
    diffTime = (new Date()).getTime() - prevTime;
    console.log("lanczos3", diffTime);
}

const outputFile = async (input, kernel) => {
    await sharp(input)
    .resize(100, 100, {
        kernel: kernel,
    })
    .toFile(`${imageName}-${kernel}.jpg`)
}

test();
