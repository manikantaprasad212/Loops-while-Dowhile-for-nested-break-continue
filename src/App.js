import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <button onClick={()=>{
       let mathsMarks = 66;
       if(mathsMarks >= 35){
        console.log("He Passed In Maths Subject");
       }
     }}>If</button>
     <button onClick={()=>{
       let physicsMarks = 57;
       while(physicsMarks >= 35){
        console.log("He Passed In Physics Subject");
       }
     }}>While</button>
     <button onClick={()=>{
       let chemistryMarks = 99;
       while(chemistryMarks >= 35){
        console.log(` While  - ${chemistryMarks}`);
        chemistryMarks--;
       }
     }}> Another While</button>
     <button onClick={()=>{
      let englishMarks = 88;
      do{
         console.log(`do while - ${englishMarks}`);
         englishMarks--;
      }while(englishMarks >=35)
     }}>do while</button>
     <button onClick={()=>{
      for(let i=1;i<=3000;i++){
        console.log(i);

      }
     }}>for</button>

     <button onClick={()=>{

       for (let i=1;i<=100;i++){
        for (let j=1;i<=10;j++){
        console.log(`${i}*${j} = ${i*j}`);
        
        }
       }
     }}>Nested</button>
     <button onClick={()=>{

     for(let i=1;i<=1000;i++){
      console.log(i);
      if(i == 899){
        break;
      }

     }


     }}>Break</button>
     <button onClick={()=>{

     for(let i=1;i<=1000;i++){
     if(i>266 && i < 899){
      continue;

     }
      console.log(i);



     }


   }}>Continue</button>
    </div>
  );
}

export default App;
