Portfolio Project

A simple and clean portfolio website built using React, Vite, and a modular folder structure.
The application includes multiple pages (Home, About, Portfolio, Contact) along with reusable components such as Navbar, Footer, and Cards.



🚀 Features


⚡ Fast development with Vite

🎨 Modular and reusable components

📱 Fully responsive design

🧭 Client-side routing using react-router-dom

🧩 Organized folder structure (Components / Pages / Assets)

🌐 Deployed using Vercel (supports SPA routing via vercel.json)








📂 Project Structure


FIRST-REACT-ASS/
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Card/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── Navbar/
│   ├── Pages/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   └── Portfolio/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vercel.json
├── vite.config.js
├── package.json
└── README.md









🛠️ Technologies Used



React 18

Vite

React Router DOM

CSS / Bootstrap / Custom styling

JavaScript (ES6+)






📦 Installation & Setup


1️⃣ Clone the repository
git clone https://github.com/Ziad-AboElenien/Portfolio
cd FIRST-REACT-ASS

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev

🔧 Build for Production
npm run build

This will generate a dist/ folder ready to deploy.







🌍 Vercel Deployment


This project includes a vercel.json file to fix React Router routing:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}


This ensures your SPA works correctly on page refresh.






🤝 Contributing

Pull requests are welcome.
Feel free to open issues for suggestions or improvements.





📄 License

This project is open-source and available under the MIT License.