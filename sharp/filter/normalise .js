const sharp = require('sharp');
const test = async () => {
    const imageName = "lena";
    const src = "./测试图集/lena.PNG";
    await sharp(src)
    .normalise()
    .toFile(`${imageName}-normalise.jpg`)
}

test();