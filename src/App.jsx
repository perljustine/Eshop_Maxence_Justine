import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './assets/data.json'

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
          <div className="flex justify-center items-center w-full flex-wrap flex-row xl:grid xl:grid-cols-3 xl:justify-items-center">
              {
                  // ici je sur le dossier json
                  products.map((item) => (
                      // gestion des props pour le components card
                      <Card key={item.name} prod={item} addToCart={addToCart}></Card>
                  ))
              }
          </div>
          {/* bouton du panier */}
          <div className="fixed bottom-6 right-6 flex flex-col items-end">
              <button className="bg-slate-900 p-6 w-20 h-20 rounded-full shadow-lg flex items-center relative text-3xl" onClick={() => setOpen(!open)}>
                  🛒
                  {totalProd > 0 && (
                      // crée un petit rond de notification du nombre de produits
                      <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white py-0.5 rounded-full h-5 w-5 text-center">{totalProd}</span>
                  )}
              </button>
              {/* section Panier  */}
              {open && (
                  <div className="mt-3 w-80 bg-white shadow-lg p-5 rounded-lg h-80 overflow-y-auto">
                      <div className="flex justify-between items-center">
                          <h2 className="text-xl font-bold">Panier</h2>
                          <button className="text-red-500 font-bold" onClick={() => setOpen(false)}>✖</button>
                      </div>
                      {cart.length === 0 ? (
                          <p className="text-gray-500">Votre panier est vide</p>
                      ) : (
                          cart.map((item) => (
                              <div key={item.name} className="flex justify-between items-center border-b p-2">
                                  <img src={`/images/${item.img}`} alt={item.name} className="w-12 h-12 mr-4 rounded-md" />
                                  <p className="flex-1">{item.name}</p>
                                  <p>{item.quantity} x {item.price}€</p>
                                  <button onClick={() => removeFromCart(item)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded">➖</button>
                              </div>
                          ))
                      )}
                      <div className="mt-4">
                          <p>Total des articles : {totalProd}</p>
                          <p className="font-bold text-lg">Total à payer : {totalGen}€</p>
                      </div>
                  </div>
              )}
          </div>
      </>
  );
}

export default App
