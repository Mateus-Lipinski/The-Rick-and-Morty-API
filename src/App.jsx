import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

// const mock = []

function App() {
  const [conteudo, setConteudo] = useState(<>Carregando</>)

  async function PegarConteudo() {
    // Vai realizar o fetch para o api do Rick and Morty

    // GET = buscar info
    // POST = adicionar info
    // PUT = alterar info
    // DELETE = deletar info
    const requestOptions = {
      method: 'GET'
    }

    const response = await fetch(
      'https://rickandmortyapi.com/api/character',
      requestOptions
    )

    if(!response.ok) {
      return []
    }

    const data = await response.json()

    return data.results
  }

  async function TransformaEmLista() {
    const todosPersonagens = await PegarConteudo();

    return todosPersonagens.map(personagem =>
      <div className='card char' key={personagem.id}>

        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className='char-info'>
          <span><b>Espécie: </b>{personagem.species}</span>
          <span><b>Gênero: </b>{personagem.gender}</span>
        </div>

        <div>
          <div className='lista-secundaria'>
            <b>Participações:</b>
            {/* Desafio - Traga as participações*/}
          </div>
          <h5><b>Status: </b>{personagem.status}</h5>
        </div>

      </div>
    )
  }

  useEffect(() => {
    async function Carregar() {
      setConteudo(
        await TransformaEmLista()
      );
    }
    Carregar();
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
