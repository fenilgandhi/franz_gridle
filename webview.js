// orat.io integration
module.exports = (Franz) => {
  function getMessages() {
    let count = 0;
    const elements = document.getElementsByClassName('unread-msg');
    if (elements) {
        for (let i = 0; i < elements.length; i += 1){
            if (elements[i].innerHTML) {
                count += parseInt(elements[i].innerHTML);
            }
        }
    }
    Franz.setBadge(count);
  }
  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'index.css'));
}
