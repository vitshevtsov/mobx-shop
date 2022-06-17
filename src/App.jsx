import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Routes from "./components/Routes/Routes";
import products from "./store/products";

function App() {

    useEffect(() => {
        products.getProducts();
    }, []);

    return (
        <div className="App">
            <Header>
                <HeaderNavbar />
            </Header>
            <Routes />
        </div>
    );
}

export default App;
