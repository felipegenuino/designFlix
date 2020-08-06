import React from 'react';
import dadosIniciais from './data/dados_iniciais.json'
import Header from './components/header';
import Button from './components/Button';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
<Carousel 
  ignoreFirstVideo
  category={dadosIniciais.categorias[0]}
/>

<Carousel  
  category={dadosIniciais.categorias[1]}
/>

     <h1>Hello</h1>
     <Button as="a" className="ButtonLink" href="/bytt" >
       Button
     </Button>


    </div>
  );
}

export default App;
