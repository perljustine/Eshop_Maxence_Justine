import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import data from './assets/data.json'
import Header from './components/Header'

function App() {

<<<<<<< HEAD
  return (
      <>
              <Header />
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
=======
    return (
    <>
        <Header></Header>
>>>>>>> d1d80e0 (ajout des photos dans les cartes)

          export default App
 
