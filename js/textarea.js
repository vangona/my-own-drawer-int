const textArea = $('.header__question');

function adjustHeight() {
    textArea[0].style.height = 'auto';
    let textAreaHeight = textArea.prop('scrollHeight');
    textArea.css('height', textAreaHeight - 5*vh);
  };

function init() {
    textArea.on('keyup', function() {
        adjustHeight();
    })
}

init();