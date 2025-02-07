import React, { useState, useEffect } from 'react';

const Wallet = ({ cart, totalGen, setCart }) => {
    const [walletBalance, setWalletBalance] = useState(0);
    const [showInitialInput, setShowInitialInput] = useState(true);
    const [remainingBalance, setRemainingBalance] = useState(0); 
    // on vient créer un use state pour gérer le solde du wallet en reprenant le total gen du cart 

    useEffect(() => {
        setRemainingBalance(walletBalance - totalGen);
    }, [walletBalance, totalGen]);  // le useEffect se lance une fois que walletBalance et totalGen sont mis à jour

    const handleInitialBalance = (e) => {
        const amount = parseFloat(e.target.amount.value);
        if (!isNaN(amount) && amount > 0) {
            setWalletBalance(amount);
            setShowInitialInput(false); // on initialise la balance du wallet par la condition de showInitialInput à false
        }
    };  // on utilise le useEffect pour gérer le montant du wallet une fois cliqué il devient false et donc se cache 

    const handlePayment = () => {
        if (remainingBalance >= 0) {
            // Mettre à jour le solde du wallet
            setWalletBalance(remainingBalance);
            setCart([]); // on vide le panier
        } 
    };

    return (
        <div className="mt-4 border-t pt-4">
            {showInitialInput ? (
                <div className="p-2">
                    <h2 className="text-sm font-semibold mb-2">Initial Wallet Balance</h2>
                    <form onSubmit={handleInitialBalance}>
                        <div className="mb-2">
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                min="0"
                                className="w-full p-1 border rounded text-sm"
                                placeholder="Enter amount (€)"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-1 text-sm rounded hover:bg-blue-700"
                        >
                            Set Balance
                        </button>
                    </form>
                </div>
            ) : (
                <div className="p-2">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Initial Balance:</span>
                            <span className="font-semibold">{walletBalance}€</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Cart Total:</span>
                            <span className="font-semibold text-red-500">-{totalGen}€</span>
                        </div>
                        <div className="pt-2 border-t">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Remaining Balance:</span>
                                <span className={`font-bold ${remainingBalance < 0 ? 'text-red-500' : 'text-green-500'}`}> 
                                {/* On affiche le texte en rouge si le solde est inférieur à 0, sinon en vert  */}
                                    {remainingBalance}€
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button
                            onClick={handlePayment}
                            className={`w-full py-1 rounded text-sm text-white ${
                                remainingBalance < 0 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`} // on desactive le bouton si le solde est inférieur à 0
                            disabled={remainingBalance < 0}
                        >
                            {remainingBalance < 0 ? 'Insufficient Balance' : 'Pay Now'}
                            {/* On affiche un message d'insuffisance de solde si le solde est inférieur à 0  sinon pay now */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wallet;