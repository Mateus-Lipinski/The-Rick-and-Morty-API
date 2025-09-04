import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/character'
import { Link } from 'react-router-dom';

// const mock = []

function RickAndMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TransformaEmLista() {
        const todosPersonagens = await getCharacters();

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
        <main>
            <Link to={'/'}>
                <button>
                    Voltar para Home
                </button>
            </Link>
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}

export default RickAndMorty
