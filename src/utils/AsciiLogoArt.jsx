import asciiArt from '../store/logoArt.txt'

function AsciiLogoArt() {
  
    fetch(asciiArt)
    .then(response => response.text())
    .then(data => {
        console.log(`%c${data}`, ' color: #FFA500;background-color: transperant; ');
    })
    // eslint-disable-next-line no-unused-vars
    .catch(error => {
      console.log('transcripts-api');
    });
}

export default AsciiLogoArt;
