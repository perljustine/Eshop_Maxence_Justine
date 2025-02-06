# Eshop_exo
# 🏗️ **Plan de travail pour un e-shop en 2 jours**

### ⚙️ **Technos :**

- **Frontend :** React (Vite) + Tailwind CSS
- **Données :** JSON (`products.json`)
- **Gestion de version :** Git + GitHub

---

---

## 📝 **1. Répartition des tâches**

### 🧑‍💻 **Développeur A**

- Création de la liste des produits (`products.json`)
- Affichage des produits sous forme de cartes dynamiques
- Ajout d’un produit au panier
- Gestion du stock (diminution après ajout au panier)
- Désactiver le bouton "Ajouter au panier" si le stock est à 0

### 🧑‍💻 **Développeur B**

- Initialisation du projet (**React, Tailwind, Git**)
- Actions sur le panier (**ajouter, supprimer, augmenter/diminuer quantité**)
- Vider le panier après validation

---

# 📅 **Jour 1 : Mise en place et affichage des produits**

✅ **Matin**

### **Développeur B :**

🔹 **Initialisation du projet**

- Créer un projet avec **Vite**
- Installer **Tailwind CSS**
- Configurer **Git** et créer un **repo GitHub**
- Pousser le projet sur GitHub

📌 **Branche : `setup-project`**

```bash
bash
CopierModifier
npx create-vite my-eshop --template react
cd my-eshop
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
git init
git add .
git commit -m "Initialisation du projet"
git branch -M dev
git remote add origin <URL_GITHUB>
git push -u origin dev

```

---

### **Développeur A :**

🔹 **Création de `products.json`**

- Ajouter une liste de produits avec **id, nom, prix, stock et image**

📂 **Exemple `products.json`**

```json
json
CopierModifier
[
  { "id": 1, "name": "T-shirt", "price": 20, "stock": 10, "image": "tshirt.jpg" },
  { "id": 2, "name": "Pantalon", "price": 40, "stock": 5, "image": "pantalon.jpg" }
]

```

📌 **Branche : `setup-data`**

```bash
bash
CopierModifier
git checkout -b setup-data
git add products.json
git commit -m "Ajout des produits"
git push origin setup-data

```

---

✅ **Après-midi**

### **Développeur A :**

🔹 **Affichage des produits sous forme de cartes dynamiques**

- Créer un composant **`ProductCard.jsx`**
- Mapper `products.json` et afficher chaque produit

📌 **Branche : `feature-products`**

```jsx
jsx
CopierModifier
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.price}€</p>
      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded ${
          product.stock === 0 && "opacity-50 cursor-not-allowed"
        }`}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

```

🔹 **Gestion du stock (diminution après ajout au panier)**

- Mettre à jour l’état du stock après chaque ajout

📌 **Commit & Push**

```bash
bash
CopierModifier
git add .
git commit -m "Affichage des produits et gestion du stock"
git push origin feature-products

```

---

### **Développeur B :**

🔹 **Mise en place du panier (`Cart.jsx`)**

- Créer un **composant `Cart.jsx`**
- Ajouter **des boutons pour augmenter/diminuer/supprimer un produit**

📌 **Branche : `feature-cart`**

```jsx
jsx
CopierModifier
const Cart = ({ cart, updateCart }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Panier</h2>
      {cart.length === 0 ? <p>Le panier est vide</p> : (
        cart.map(item => (
          <div key={item.id} className="flex justify-between items-center">
            <p>{item.name} x {item.quantity}</p>
            <button onClick={() => updateCart(item, "increase")}>+</button>
            <button onClick={() => updateCart(item, "decrease")}>-</button>
            <button onClick={() => updateCart(item, "remove")}>🗑️</button>
          </div>
        ))
      )}
    </div>
  );
};

```

📌 **Commit & Push**

```bash
bash
CopierModifier
git add .
git commit -m "Ajout de la gestion du panier"
git push origin feature-cart

```

---

# 📅 **Jour 2 : Finalisation et tests**

✅ **Matin**

### **Développeur A :**

- Vérifier que **le stock diminue** après ajout au panier
- Désactiver **le bouton "Ajouter au panier"** si **stock = 0**
- Tester les mises à jour de l’état React

📌 **Commit & Push**

```bash
bash
CopierModifier
git add .
git commit -m "Stock mis à jour après ajout au panier"
git push origin feature-products

```

---

### **Développeur B :**

- Gérer l’action **"Vider le panier après validation"**
- Tester **les mises à jour du panier**
- Corriger les éventuels **bugs**

📌 **Commit & Push**

```bash
bash
CopierModifier
git add .
git commit -m "Ajout du bouton de validation du panier"
git push origin feature-cart

```

---

✅ **Après-midi (ensemble)**

🔹 **Test final et fusion des branches**

- Tester **l’ajout/suppression des produits dans le panier**
- Vérifier que **le stock se met à jour correctement**
- Fusionner toutes les branches dans **`dev`**

📌 **Fusionner les branches Git**

```bash
bash
CopierModifier
git checkout dev
git merge feature-products
git merge feature-cart
git push origin dev

```

🔹 **Amélioration du design avec Tailwind**

- Ajouter du **padding/marges/couleurs**

🔹 **Corrections de bugs et ajustements finaux**

📌 **Dernier commit et push**

```bash
bash
CopierModifier
git add .
git commit -m "Finalisation et correction des bugs"
git push origin dev

```

---
