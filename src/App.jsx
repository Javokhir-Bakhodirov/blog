import "./App.css";
import Header from "./components/header/Header";
import SiteFooter from "./components/footer/SiteFooter";
import RouteController from "./routes";

function App() {
	return (
		<>
			<Header />
			<RouteController />
			<SiteFooter />
		</>
	);
}

export default App;
