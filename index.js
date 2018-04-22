
//Global Variable that lives IN THE BROWSER and on top of the window. 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

//space to push speech
let p = document.createElement('p');
const words = document.querySelector('words');
words.appendChild(p);

//mapping to array. 
recognition.addEventListener('result', e=> {
    console.log(e.results);
    const transcript = Array.from(e.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join('')

                            p.textContent  = transcript;
                                if(e.results[0].isFinal) {
                                    p = document.createElement('p');
                                    words.appendChild(p);
                                }
                                if(transcript.includes('Jung')) {
                                    console.log ('You said my name!');
                                }
                        console.log(transcript)
});
recognition.addEventListener('end', recognition.start);
recognition.start();