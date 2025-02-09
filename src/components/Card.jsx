// eslint-disable-next-line react/prop-types
function Card({ prod, addToCart,quantity, price, img, name , star}) {
    // ici on gère les stocks entre les card et l'app
    const stock = quantity;

    const handleStock = () => {
        // la fonction se lance que si les stocks sont supp à 0
        if (stock > 0) {
            addToCart(prod);
        }
    };

    return (
        <>
            <div className={`relative  mt-4  flex w-full max-w-xs flex-col overflow-hidden rounded-xl gap-2  border-2 border-pink-100 bg-white shadow-lg shadow-pink-100 ${stock === 0 ? "opacity-50" : ""}`}>
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden justify-center">
                    <img className="object-cover" src={`/images/${img}`} alt={name} />
                    {stock === 0 && (
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
                            Épuisé
                        </span>
                    )}
                </div>
                <div className="mt-4 px-5 pb-5">
                    <h5 className="text-xl tracking-tight text-slate-800 text-semibold font-chewy">{name}</h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className="text-xl font-bold text-neutral-600">{price}€</p>
                        <div className="flex items-center justify-between">
                            {/*création d'un tableau d'une longeur de 5 et puis on boucle avec le point maps on igore la valeur et on prend que l'index de l'élément*/}
                            {[...Array(5)].map((_, index) => (
                                // ici c'est une condition pour si l'index est plus petite que le nombre d'étoile alors c'est jaune sinon c'est gris
                                <svg key={index} aria-hidden="true" className={`h-5 w-5 ${index < star ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                            ))}
                        </div>
                        <span
                            className={`mr-2 ml-3 bg-neutral-200 rounded px-2.5 py-0.5 text-xs font-semibold ${stock === 0 ? "bg-red-500 text-black" : "bg-pink-100 text-black"}`}>
                                {stock > 0 ? `Stock : ${stock}` : "Rupture"}
                            </span>
                    </div>
                    {/*disable renvoit un booleén et permet d'empêcher l'utilisateur d'utiliser le bouton si la valeur est 0*/}
                    <button onClick={handleStock} disabled={stock === 0} className={`hover:duration-300 ease-in-out hover:animate-pulse flex w-full items-center justify-center  rounded-l px-5 py-2.5 text-center text-sm font-medium text-white ${stock === 0 ? "bg-red-500 cursor-not-allowed" : "bg-violet-400 hover:bg-pink-100 hover:text-neutral-600"}`}>
                        {stock === 0 ? "Épuisé" : "Ajouter au panier"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;