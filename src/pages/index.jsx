import Dashboard from "../components/dashboard";
import Sidebar from "../components/sidebar";

const Home = () => {
	return (
		<div className="min-w-screen min-h-screen flex">
			<div className="w-[270px] bg-white relative top-0 left-0 h-screen shrink-0">
				<Sidebar />
			</div>
			<Dashboard />
		</div>
	);
};

export default Home;
