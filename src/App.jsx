// COMPONENTES
import NavBar from "./components/NavBar";
import BestSellers from "./components/BestSellers";
import Agends from "./components/Agends";
import Loc from "./components/Loc";
import Footer from "./components/Footer";

// IMAGES
import logoMulticopia from "./assets/Logo redonda Multicópia.png"


import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'



function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        
        <main>         
            <BestSellers></BestSellers>
            <Agends></Agends>
              <FloatingWhatsApp
              phoneNumber="77988330595"
              chatMessage="Olá, o que deseja?"
              notificationSound={true}
              accountName="Multicópia"
              avatar={logoMulticopia}
              statusMessage="Online"
              notification={true}
              placeholder="Mande Aqui Sua Mensagem"
              />
            <Loc></Loc>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
}

export default App;
