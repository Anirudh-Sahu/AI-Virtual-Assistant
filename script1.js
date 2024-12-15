const btn=document.querySelector('.btn')  
const content=document.querySelector('.content')  
const voice=document.querySelector('.voice')

function speak(text){  
    const text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;  
    text_speak.volume=1;  
    window.speechSynthesis.speak(text_speak);
    
}

window.addEventListener('load', () => { 
    speak("Intializing Shifra"); 
    
    });