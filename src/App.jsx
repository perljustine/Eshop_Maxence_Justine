import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Header from './components/Header'
=======
import Card from './components/Card'
import data from './assets/data.json'
>>>>>>> 4a6c230 (Céation de la carte et mise en place des props qui permettent d'avoir pour chaque carte des nom et des valeurs différentes.)

function App() {

  return (
<<<<<<< HEAD
    <>
     <Header></Header>
    </>
  )
}
=======
      <>
              <div className="flex justify-center items-center w-full flex-wrap flex-row xl:grid xl:grid-cols-3 xl:justify-items-center">
                  {
                      data.map((item) => (
                          <Card key={item.name} name={item.name} quantity={item.quantity} price={item.price}></Card>
                      ))
                  }
              </div>
          </>
          )
          }
>>>>>>> 4a6c230 (Céation de la carte et mise en place des props qui permettent d'avoir pour chaque carte des nom et des valeurs différentes.)

          export default App
