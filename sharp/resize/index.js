const sharp = require('sharp');

const imageName = "DJI_0966";
const src = "./测试图集/DJI_0966.JPG";
// const nearestTime = 

const test = async () => {
    await sharp(input)
    .resize(100, 100, {
        kernel: kernel,
    })
    .toFile(`${imageName}-${kernel}.jpg`)
}

test();
