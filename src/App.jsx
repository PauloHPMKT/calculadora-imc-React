import React, { useState } from 'react'
import './App.css'

function App() {

  const[peso, setPeso] = useState('')
  const[altura, setAltura] = useState('')
  const[mensagem, setMensagem] = useState('')

  function calcularImc() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(imc < 18.6) {
      setMensagem(`Você está abixo do peso! seu IMC: ${imc.toFixed(2)}`)
    } else if(imc >= 18.6 && imc < 24.9) {
      setMensagem(`Você está no peso ideal! seu IMC: ${imc.toFixed(2)}`)
    } else if(imc >= 24.9 && imc < 34.9) {
      setMensagem(`Você está levemente acima do peso! seu IMC: ${imc.toFixed(2)}`)
    } else if(imc > 34.9) {
      setMensagem(`Cuidado, Obesidade! seu IMC: ${imc.toFixed(2)}`)
    }
  }

  return (
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input 
          type="text" 
          placeholder='Peso em (kg) Ex: 90'  
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Altura em (cm) Ex: 180'  
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App
