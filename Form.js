import React,{useState} from 'react'

export default function Form(props) {

    const HandleOnChange=(event)=>{
        settext(event.target.value);
    }

    const HandleOnClick=()=>{
      let newtext=text.toUpperCase();
      settext(newtext); 
      
    //   setInterval(()=>{
    //      document.title="this is an amazing app"
    //   },2000)

      
    //   setInterval(()=>{
    //     document.title="try to download it on phone"
    //  },1500)
    }

    const HandleOnLower=()=>{
      let lower=text.toLowerCase();
      settext(lower);
    }
     const HandleClearText=()=>{
      let newtext='';
      settext(newtext);
     }

      const CopyText=()=>{
        var copytext=document.getElementById("textArea")
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
      }

      const Replacement=()=>{

        
          const textarea=document.getElementById("textArea");
          const WordToReplaceInput=document.getElementById("wordToReplace");
          const ReplacementWordInput=document.getElementById("replacementWord");
          const btn=document.getElementById("replaceButton");

        btn.addEventListener('click', function(){
            const beforeReplace=WordToReplaceInput.value;
            const afterReplacement=ReplacementWordInput.value;
            const currentvalue=textarea.value;


             if(beforeReplace.trim==='' && afterReplacement.trim===''){
              console.log("please enter something to change the word and replace it with the new one");
             }

             const reg=new RegExp(beforeReplace,"g");
             const update=currentvalue.replace(reg,afterReplacement);
             textarea.value=update;


        });
      

       
      }

      const space=()=>{
          let newText=text.split(/[ ]+/);
          settext(newText.join(" "));
      }

       

      const[text,settext]=useState("enter your text here");

     
  return (

    <>
  
    <div className="form_control">

  <form>
  <div className="form-group">
     <h3 className="heading">{props.heading}</h3>  
    <textarea className="form-control" value={text} onChange={HandleOnChange} id="textArea"   rows="8"></textarea>
    <button type="button" className="btn btn-primary my-2" onClick={HandleOnClick}>Convert to Uppercase</button>
    <button type="button" className="btn btn-warning my-2 mx-4" onClick={HandleOnLower}>Convert to lowercase</button>
    <button type="button" className="btn btn-danger my-2 " onClick={HandleClearText}>Clear Text</button>
    <label for="Wordtoreplace" id="label" >Word To Replace</label>
    <input type="text" id="wordToReplace"/>
    <label for="ReplacementWord" id="label">ReplacementWord</label>
    <input type="text" id="replacementWord"/>
     <button id="replaceButton" className="btn btn-success"   onclick={Replacement}>Replace</button>
     <button id="CopyBtn" className="btn btn-warning"  onClick={CopyText}>Text Copy</button>
     <button id="CopyBtn1" className="btn btn-danger"type="button" onClick={space}>Extra Spaces</button>

  </div>
</form>

  

    <div className="container">
      <h1>Your Text Summary</h1>
      <p>Your Text Have {text.split(" ").length} words and {text.length} characters </p>
      <h3>Time taken to read a text {0.008 * text.split(" ").length}</h3>
      <h2>Preview The Text</h2>
      <p>{text}</p>
    </div>
    </div>
    </>

      


  )
}


