let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("#sel");

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0];

    voices.forEach((voice, index) =>
        (voiceSelect.options[index] = new Option(voice.name, index)));

}


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("#btn-search").addEventListener("click", () => {

    speech.text = document.querySelector("#search").value
    speech.volume =1
    speech.pitch=.5
    speech.rate=0.8
    window.speechSynthesis.speak(speech);


})

document.querySelector("3")