import "./SinglePage.css";
import data from "../../data/data";
import Container from "../../components/container/Container";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SinglePage = () => {
	const { id } = useParams();
	const [t] = useTranslation();
	const item = data.find((item) => id == item.id);

	const toTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!item) {
		return <p>Item not found</p>;
	}

	return (
		<section className="single-page">
			<Container>
				<div className="page flex items-center justify-center flex-col gap-[59px]">
					<h1 className="text-white	page__title">Blog title</h1>
					<div className="author__block flex gap-[10px]">
						<img
							src={item.avatar}
							alt="avatar"
							className="author__block-img w-[60px] "
						/>
						<div className="author__block-info-s flex gap-[10px] flex-col ">
							<p className="author__block-name-s">{item.name}</p>
							<p className="author__block-date-s  text-white">
								{item.dataAddition}
							</p>
						</div>
					</div>
					{item.img && (
						<img
							src={item.img}
							alt={item.title}
							className="page__img w-[850px] h-[350px] object-cover"
						/>
					)}

					<h1 className="text-white">{t(item.title)}</h1>
					<p className="text-white">{t(item.description)}</p>
				</div>

				<button className="page__btn bg-white mt-[1250px]" onClick={toTop}>
					To Top{" "}
				</button>
			</Container>
		</section>
	);
};

export default SinglePage;
