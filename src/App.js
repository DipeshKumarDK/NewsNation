
import Header from "./components/Header";
import Mid from "./components/Mid";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from "react";
import {SiPrismic} from "react-icons/si"
import {useHistory} from "react-router-dom"

const App = () => {
  const [mode, setMode] = useState('light');
  const [ham, setHam] = useState('no');

  const nav = useHistory()

  const commands = [
    
    {
      command:"open *",
      callback:(site) => {
        window.open('http://'+site)
      }
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) =>    resetTranscript()
    },
    {
      command: 'stop',
      callback: ({ stopListening }) =>    stopListening()
    },
    {
      command:"show * headlines",
      callback:(page) => {
        nav.push("/"+page)
      }
    },
    {
      command:"show * news",
      callback:(page) => {
        nav.push("/"+page)
      }
    },
    {
      command:"read * news",
      callback:(txt)=>readOut(txt)
    },
    {
      command:"read * headlines",
      callback:(txt)=>readOut(txt)
    }
  ]

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  const changeHam = ()=>{
    if(ham === 'yes'){
      setHam('no');
    }
    else{
      setHam('yes');
    }
  }

  const changeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }


  const readOut = async(txt) => {
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${txt}&apiKey=d44cd17446874c83bbd7b84011798f1b&page=1&pageSize=40`);
      let currData = await data.json();

      for(let i = 0 ; i<currData.articles.length; i++){
      const speech = new SpeechSynthesisUtterance();
      const allVoices = speechSynthesis.getVoices();
      console.log(allVoices)
      speech.text = currData.articles[i].title;
      speech.voice = allVoices[2];
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
      }
      console.log('speaking out')
  }

  return (   
    <div >
      <Header mode={mode} changeMode={changeMode} changeHam={changeHam} ham={ham}/>
      <div className="right-0 bottom-0 mr-2 mb-2 fixed wq:mt-0 mt-2 flex flex-row rounded-xl p-1" onClick={SpeechRecognition.startListening}>
      <div className="flex flex-col justify-center bg-slate-300 mr-2 rounded-xl">
      <p className="p-1">{transcript}</p>
      </div>
      <div className={`p-1 ${mode==="light"?"bg-blue-600":"bg-white"} opacity-70 rounded-3xl`}>
      <SiPrismic className="md:h-10 md:w-10 h-8 w-8" />
      </div>
      </div>
      <div className="flex flex-row">
      <div> 
      <hr/>
      <div className="">
      <Switch>
          <Route exact path="/"><Mid mode={mode} key="general" category="general"/></Route> 
          <Route exact path="/business"><Mid mode={mode} key="business" category="business"/></Route> 
          <Route exact path="/entertainment"><Mid mode={mode} key="entertainment" category="entertainment"/></Route>  
          <Route exact path="/health"><Mid mode={mode} key="health" category="health"/></Route> 
          <Route exact path="/science"><Mid mode={mode} key="science" category="science"/></Route> 
          <Route exact path="/sports"><Mid mode={mode} key="sports" category="sports"/></Route> 
        </Switch>
      </div>
      </div>
      </div>     
    </div>
  );
}

export default App;
