import { Link } from "react-router-dom"

function Home() {
    
    
    return (
        <>
            Outras informações e um
            <Link to={'/rick-and-morty'}>
            <button>
                Navegar para a API
            </button>
            </Link>
        </>
    )
}

export default Home