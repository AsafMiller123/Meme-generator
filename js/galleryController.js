function init() {
    renderMemes(gImgs);
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
}


function renderMemes(memesImages) {
    var containerElement = document.querySelector('.grid-container');
    var strHtml = '';
    memesImages.forEach(meme => {
        strHtml += `<img class="meme" src='meme-images/${meme.url}' onclick="onOpenSection(${meme.id})" />`
    });

    containerElement.innerHTML = strHtml;
}


function onSearchClick() {
    input = document.getElementById("Meme").value;
    var images = getMemes(input);
    if (images.length === 0) images = gImgs;
    renderMemes(images);
}


function getMemes(input) {
    var images = gImgs.filter(image => {
        var keywords = image.keywords;
        return keywords.includes(input);
    })

    document.querySelector('.grid-container').innerHTML = '';
    return images;
}