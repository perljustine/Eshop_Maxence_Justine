// eslint-disable-next-line react/prop-types
function Card({ prod, addToCart }) {
    // ici on gère les stocks entre les card et l'app
    const stock = prod.quantity;

    const handleStock = () => {
        // la fonction se lance que si les stocks sont supp à 0
        if (stock > 0) {
            addToCart(prod);
        }
    };

    return (
        <>
            <div className={`relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ${stock === 0 ? "opacity-50" : ""}`}>
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center">
                    <img className="object-cover" src={`/images/${prod.img}`} alt={prod.name} />
                    {stock === 0 && (
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
                            Épuisé
                        </span>
                    )}
                </div>
                <div className="mt-4 px-5 pb-5">
                    <h5 className="text-xl tracking-tight text-slate-900">{prod.name}</h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className="text-3xl font-bold text-slate-900">{prod.price}€</p>
                            <span className={`mr-2 ml-3 rounded px-2.5 py-0.5 text-xs font-semibold ${stock === 0 ? "bg-gray-500 text-white" : "bg-yellow-200 text-black"}`}>
                                {stock > 0 ? `Stock : ${stock}` : "Rupture"}
                            </span>
                    </div>
                    {/*disable renvoit un booleén et permet d'empêcher l'utilisateur d'utiliser le bouton si la valeur est 0*/}
                    <button onClick={handleStock} disabled={stock === 0} className={`flex w-full items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white ${stock === 0 ? "bg-red-500 cursor-not-allowed" : "bg-slate-900 hover:bg-[#DF7BAA]"}`}>
                        {stock === 0 ? "Épuisé" : "Ajouter au panier"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;