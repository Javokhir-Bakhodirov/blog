import React from "react";
import { useTranslation } from "react-i18next";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
	const [t] = useTranslation();
	return (
		<li className="list__item text-white w-[350px] text-left py-[20px] inline">
			{item.img && (
				<img
					src={item.img}
					alt={t(item.title)}
					className="list__item-img mb-[25px]"
				/>
			)}
			<Link to={`/${item.id}`}>
				{" "}
				<h3 className="list__item-title line-clamp-3 mb-[25px]">
					{t(item.title)}
				</h3>
			</Link>
			<p className="list__item-description line-clamp-4 mb-[20px]">
				{t(item.description)}
			</p>
			<div className="author__block flex items-center gap-[10px]">
				<img
					src={item.avatar}
					alt={item.name}
					className="author__block-img"
					width={40}
					height={40}
				/>
				<div className="author__block-info">
					<p className="author__block-name">{item.name}</p>
					<p className="author__block-date">{item.dataAddition}</p>
				</div>
			</div>
		</li>
	);
};

export default Card;
