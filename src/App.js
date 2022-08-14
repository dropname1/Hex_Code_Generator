import './App.css';
import img1 from "./img/img1.png"

function App() {

    let Hex_Code = "#";
    let Hex_String = "0123456789abcdef";
  function generateHexCode () {
    for (let i = 0; i < 6; i++) {
      Hex_Code += Hex_String[Math.floor(Math.random() * 16)];
    }
    let res = document.querySelector('.result')
    res.textContent = Hex_Code
    res.style.color = Hex_Code
    Hex_Code = "#";
    }
    
     function Copied_function () {
        let copyText = document.querySelector('.result').textContent;
        navigator.clipboard.writeText(copyText)
         .then(text => {
             // `text` содержит текст, прочитанный из буфера обмена
         })
         .catch(err => {
             // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
         console.log('ERR', err);
  })
  let modal_window = document.querySelector('.modal_window')
  modal_window.classList.add('modal_window_properites')
  setTimeout( () => {
    modal_window.classList.remove("modal_window_properites")
  },2000)
}







  return (
    <div className="App"> 
    <div className='modal_window'>Copied</div>
      <div className="main_wrapper">
        <h1 className="title">Hex Code Genrator</h1>
        <div className="button_wrapper">
          <button className='button' onClick={() => {
            generateHexCode()
          }}>Genreate</button>
        </div>
        <div className='result_wrapper'>
          <div className="result">#000000</div>
          <div className='copy_button' onClick={() => {
            Copied_function()
          }}>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
