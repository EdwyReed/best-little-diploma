function saveImg() {
    let parent = document.getElementById("diploma");

    let nomination = document.getElementById('nomination');
    let nomination_text = nomination.value
    let princess = document.getElementById('princess');
    let princess_text = princess.value

    let nomination_span = document.createElement('span');
    nomination_span.setAttribute('id', 'nomination');
    nomination_span.innerHTML = nomination_text;

    let princess_span = document.createElement('span');
    princess_span.setAttribute('id', 'princess');
    princess_span.innerHTML = princess_text;

    parent.replaceChild(nomination_span, nomination)
    parent.replaceChild(princess_span, princess)

    html2canvas(document.getElementById("diploma"), {
        allowTaint: false,
        useCORS: true
    }).then(function (canvas) {
        Canvas2Image.saveAsPNG(canvas);
    });

    parent.replaceChild(nomination, nomination_span)
    parent.replaceChild(princess, princess_span)
}