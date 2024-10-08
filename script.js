
var btn = document.getElementById("btn");
var contant = document.getElementById("contant");
var voice = document.getElementsByClassName("voice")[0];

var typed = new Typed('.auto-type', {
    strings: ["Virtual Assistant","Created By RaviTeja Sir", "How Can I Help You"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});


function speak(text) {
  var text_speak = new SpeechSynthesisUtterance(text);
  text_speak.pitch = 2;
  text_speak.rate = 1;
  text_speak.volume = 2;
  text_speak.lang = "en-US";
  window.speechSynthesis.speak(text_speak);
}
(function () {
  var date = new Date();
  var hours = date.getHours();
  console.log(date);
  console.log(hours);

    if(hours>=0 && hours<12){
        speak("good morning sir or mam")
    }
    else if(hours>=12 && hours<16){
        speak("good Afternoon sir or mam")
    }
    else {
        speak("good Evening sir or mam")
    }
})();

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
let Recognition = new speechRecognition();
// console.log(Recognition)
Recognition.onresult = (event) => {
  var currentresult = event.resultIndex;
  // console.log(currentresult)
  var transcript = event.results[currentresult][0].transcript;
  //   var transcript = event.results[0][0].transcript;

  contant.innerHTML = transcript;
  takeCommand(transcript);
  //   console.log(event);
};
btn.addEventListener("click", () => {
  Recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});
function takeCommand(message) {
  btn.style.display = "block";
  voice.style.display = "none";
  msg = message.toLowerCase();
  console.log(msg);
  if (
    msg.includes("hello.") ||
    msg.includes("hey") ||
    msg.includes("hii") ||
    msg.includes("hi") ||
    msg.includes("hello,")
  ) {
    //    console.log("hello sir")
    speak("hello how can i help you sir ");
  } else if (
    msg.includes("who are you") ||
    msg.includes("who are you ?") ||
    msg.includes("who are you?")
  ) {
    speak("iam virtual assistant , created by Ravi Teja sir");
  } else if (msg.includes("open youtube")) {
    speak("opening youtube....");
    window.open("https://www.youtube.com");
  } else if (msg.includes("open google")) {
    speak("opening google....");
    window.open("https://www.google.co.in");
  } else if (msg.includes("open instagram") || msg.includes("open insta")) {
    speak("opening instagram....");
    window.open("https://www.instagram.com");
  } else if (msg.includes("open facebook")) {
    speak("opening facebook....");
    window.open("https://www.facebook.com");
  } else if (msg.includes("open calculator")) {
    speak("opening calculator....");
    window.open("calculator://");
  } else if (msg.includes("open whatsapp")) {
    speak("opening whatsapp....");
    window.open("whatsapp://");
  } else if (msg.includes("time")) {
    let time = new Date().toLocaleTimeString();
    speak(time);
  } else if (msg.includes("date")) {
    let date = new Date().toDateString();
    speak(date);
  } else {
    speak(`this is what i found regarding ${msg}`);
    window.open(`https://www.bing.com/search?q=${msg}`);
  }
}
