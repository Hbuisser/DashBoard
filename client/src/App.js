import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/users" element={<UserList />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
