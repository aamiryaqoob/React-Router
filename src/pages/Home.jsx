import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>  <h1>My Home Page</h1>
            <p><Link to='/products'>Go to the products</Link></p>
        </>
    )
}

export default HomePage;