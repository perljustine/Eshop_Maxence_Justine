import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './assets/data.json'
import Wallet from './components/Wallet'

function App() {
    // state pour l'ajout au panier
    const [cart, setCart] = useState([]);
    // pour la fermeture du panier
    const [open, setOpen] = useState(false);
    // gérer le stock global
    const [products, setProducts] = useState(data);


    const addToCart = (prod) => {
        setCart((existCart) => {
            // parcourt chaque élément de item de existCart et retourne le premier élément qui a les même valeur.
            const existingCart = existCart.find((item) => item.name === prod.name);
            // ici on vérifie si le produit existe le panier avec un if
            if (existingCart) {
                // si le produit existe
                return existCart.map((item) =>
                    // 1. On met une condition ternaire en vérifiant si le nom du tableau item correspond a celui de prod. 2. Si il existe alors on créer une copie de item avec ...item. 3. puis on prend la propriété quantity et on y ajoute +1. 4. si elle elle ne correspond pas alors on change rien
                    item.name === prod.name ? { ...item, quantity: item.quantity + 1 } : item
                )
                // si le produit n'exite pas encore
            }else{
                // On crée un nouveau tableau contenant les produits qui existe déjà. 2. Ensuite on ajoute le nouveau produit en créant une copie et en lui donnant quantity 1
                return [...existCart, { ...prod, quantity: 1 }];
            }
        })
        setProducts((existProd) =>
            existProd.map((item) =>
                // on vérifie le nom des stock puis on diminue les stocks de items ( ici de la card )
                item.name === prod.name && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };
    const removeFromCart = (prod) => {
        setCart((existCart) =>
            existCart
                .map((item) =>
                    // on fait la même chose que plus haut sauf que l'on retire 1 à la place
                    item.name === prod.name ? { ...item, quantity: item.quantity - 1 } : item
                )
                // filter permet de créer un nouveau tableau avec les éléments qui ne remplisse pas les conditions ici plus grand que 0
                .filter((item) => item.quantity > 0)
        )
        // gestion des stocke sur les cards grâce au fonction comme ça les deux stockes rete connecté
        setProducts((existProd) =>
            existProd.map((item) =>
                // on vérifie le nom des stock puis on ajoute des stocks de items ( ici de la card )
                item.name === prod.name ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }
    // permet de calculer la somme totale à payé
    const totalGen = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // permet de calculer la somme pour chaque produit
    const totalProd = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
      <>
          <Header />
          <h1 className="text-center font-chewy text-neutral-600  tracking-wider underline decoration-double mt-20 text-4xl mb-20">Nos Produits qui pourraient vous plaire..</h1>
          <div className="flex justify-center items-center w-ful grid gap-4 flex-wrap flex-row xl:grid xl:grid-cols-3 xl:justify-items-center">
              {
                  // ici je sur le dossier json
                  products.map((item) => (
                      // gestion des props pour le components card
                      <Card key={item.name} prod={item} addToCart={addToCart}></Card>
                  ))
              }
          </div>
          <div className="fixed bottom-20 right-6 flex flex-col items-end">
              <button className="bg-pink-50 w-15 h-15 flex  items-center justify-center rounded-full shadow-lg  relative text-3xl active:animate-spin" onClick={() => setOpen(!open)}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="26" 
                width="26" 
                viewBox="0 0 576 512"
                className="w-4 md:w-auto h-4 md:h-auto"
                >
                <path fill="#B197FC" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
          
                  {totalProd > 0 && (
                      // crée un petit rond de notification du nombre de produits
                      <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white py-0.5 rounded-full h-5 w-5 text-center">{totalProd}</span>
                  )}
              </button>
              
              {/* section Panier  */}
              {open && (
                  <div className="mt-3 w-80 bg-pink-50 shadow-lg p-8 rounded-2xl h-90 overflow-y-auto">
                      <div className="flex justify-between items-center">
                          <h2 className="text-xl flex text-center text-pink-500 font-chewy font-bold">SugarRush Cart</h2>
                          <button className="text-red-500 font-bold" onClick={() => setOpen(false)}>✖</button>
                      </div>
                      {cart.length === 0 ? (
                          <p className="text-gray-500">Votre panier est vide</p>
                      ) : (
                          cart.map((item) => (
                              <div key={item.name} className="flex justify-between items-center border-b p-2">
                                  <img src={`/images/${item.img}`} alt={item.name} className="w-12 h-12 mr-4 rounded-md" />
                                  <p className="flex-1 text-neutral-400  sm:text-s  ">{item.name}</p>
                                  <p className="text-neutral-600 font-chewy">{item.quantity} x {item.price}€</p>
                                  <button onClick={() => removeFromCart(item)} className="ml-4 bg-red-200 text-white px-2 py-1 rounded-full hover:bg-pink-400">➖</button>
                              </div>
                          ))
                      )}
                      <div className="mt-4 text-neutral-500">
                          <p>Total des articles : {totalProd}</p>
                          <p className="font-bold text-lg  text-neutral-500">Total à payer : {totalGen}€</p>
                      </div>
                      <Wallet cart={cart} totalGen={totalGen} setCart={setCart} /> 
                  </div>
              )}
          </div>
      </>
  );
}

export default App
