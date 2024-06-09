function extractFile(somePath) {

    let splitPathBy = somePath.split('\\');
    let splitPathForFileNameAndExtension = splitPathBy[splitPathBy.length - 1].split('.');
    let fileName = splitPathForFileNameAndExtension.slice(0, splitPathForFileNameAndExtension.length -1).join('.');
    let extension = splitPathForFileNameAndExtension[splitPathForFileNameAndExtension.length -1];

    console.log(`File name: ${fileName}`);
    console.log(`File name: ${extension}`);
}

extractFile('C:\\desktop\\academy\\template.pptx');
extractFile('C:\\Projects\\website.folder\\file.name.js');