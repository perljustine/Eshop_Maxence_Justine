# Eshop_exo
# 🏗️ **Plan de travail pour un e-shop en 2 jours**

### ⚙️ **Technos :**

- **Frontend :** React (Vite) + Tailwind CSS
- **Données :** JSON (`products.json`)
- **Gestion de version :** Git + GitHub

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
- Gestion du design de l'eshop

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
---
### **Développeur A :**

🔹 **Création de `products.json`**

- Ajouter une liste de produits avec **id, nom, prix, stock et image**

📂 **Exemple `products.json`**

📌 **Branche : `setup-data`**

✅ **Après-midi**

### **Développeur A :**

🔹 **Affichage des produits sous forme de cartes dynamiques**

📌 **Branche : `feature-products`**


🔹 **Gestion du stock (diminution après ajout au panier)**

- Mettre à jour l’état du stock après chaque ajout

📌 **Commit & Push**


---

### **Développeur B :**

🔹 **Mise en place du panier (`Cart.jsx`)**

- Créer un **composant `Cart.jsx`**
- Ajouter **des boutons pour augmenter/diminuer/supprimer un produit**

📌 **Branche : `feature-cart`**
-

📌 **Commit & Push**


---

# 📅 **Jour 2 : Finalisation et tests**

✅ **Matin**

### **Développeur A :**

- Vérifier que **le stock diminue** après ajout au panier
- Désactiver **le bouton "Ajouter au panier"** si **stock = 0**
- Tester les mises à jour de l’état React

📌 **Commit & Push**


---

### **Développeur B :**

- Gérer l’action **"Vider le panier après validation"**
- Tester **les mises à jour du panier**
- Corriger les éventuels **bugs**

📌 **Commit & Push**


---

✅ **Après-midi (ensemble)**

🔹 **Test final et fusion des branches**

- Tester **l’ajout/suppression des produits dans le panier**
- Vérifier que **le stock se met à jour correctement**
- Fusionner toutes les branches dans **`dev`**

📌 **Fusionner les branches Git**



🔹 **Amélioration du design avec Tailwind**

- Ajouter du **padding/marges/couleurs**

🔹 **Corrections de bugs et ajustements finaux**

📌 **Dernier commit et push**



---
