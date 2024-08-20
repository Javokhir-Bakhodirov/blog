import "./Home.css";
import Container from "../../components/container/Container";
import data from "../../data/data";
import Card from "../../components/card/Card";
const Home = () => {
	return (
		<section className="home-section">
			<Container>
				<div className="home text-center">
					<h1 className="home__title text-white hover:underline duration-300 ease-linear transition-all mb-[45px]">
						Latest Updates
					</h1>

					<ul className="home__list ">
						{data.map((item) => (
							<Card item={item} key={item.id} />
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Home;
