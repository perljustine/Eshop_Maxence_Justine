import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './assets/data.json'

function App() {

    return (
    <>
         <Header></Header>

          <div className="flex justify-center items-center w-full flex-wrap flex-row xl:grid xl:grid-cols-3 xl:justify-items-center">
              {
                  data.map((item) => (
                      <Card key={item.name} name={item.name} quantity={item.quantity} price={item.price}></Card>
                  ))
              }
          </div>
    </>
    )}
    export default App
