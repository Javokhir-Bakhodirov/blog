import Container from "../container/Container";
import "./Header.css";
import logo from "../../img/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
	const [t, i18n] = useTranslation();
	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};
	return (
		<header>
			<Container>
				<div className="header flex justify-between items-center">
					<Link to="/" className="logo__link">
						<img src={logo} alt="BLOG" className="logo " />
					</Link>
					<select
						className="select"
						defaultValue={i18n.language}
						onChange={handleChangeLanguage}
					>
						<option value="uz">Uz</option>
						<option value="en">En</option>
						<option value="ru">Ru</option>
					</select>
				</div>
			</Container>
		</header>
	);
};

export default Header;
