/* eslint-disable react/react-in-jsx-scope */
import Header from "./components/Header/Header";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Routes from "./components/Routes/Routes";

function App() {
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
