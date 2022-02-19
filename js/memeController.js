'use strict'

var input;
var gCanvas;
var gCtx;
var gImage;

function closeSection() {
    document.querySelector('.section').style.display = 'none';
    document.querySelector('.grid-container').style.display = 'grid';
}


function onTextEditorAction(action, value) {
    gLine = gMeme.lines[gMeme.selectedLineIdx];

    switch (action) {
        case 'selectNextLine':
            onSelectNextLine();
            break;
        case 'addTextLine':
            addTextLine();
            break;
        case 'deleteCurrentTextLine':
            deleteCurrentTextLine();
            break;
        case 'moveCurrentLineUp':
            moveCurrentLine(false);
            break;
        case 'moveCurrentLineDown':
            moveCurrentLine(true);
            break;
        case 'increaseFontSize':
            gFontSize++;
            updateMemeTextLineFontSize(gLine, gFontSize);
            break;
        case 'decreaseFontSize':
            gFontSize--;
            updateMemeTextLineFontSize(gLine, gFontSize);
            break;
        case 'onAlignTextLeft':
            onAlignText(1, gLine);
            break;
        case 'onAlignTextCenter':
            onAlignText(2, gLine);
            break;
        case 'onAlignTextRight':
            onAlignText(3, gLine);
            break;
        case 'updateStrokeText':
            updateStrokeText(gLine);
            break;
        case 'onSetFont':
            setTextFont(gLine, value);
            break;

        default:
            break;
    }

    drawCanvas(gMemeObject);
}
