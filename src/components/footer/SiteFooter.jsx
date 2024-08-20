import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import links from "../../img/links.svg";

const SiteFooter = () => {
	return (
		<footer className="mt-[70px] py-[30px] ">
			<Container>
				<div className="site-footer flex justify-between items-center">
					<p className="footer__text text-white">
						Thanks for{" "}
						<span className="text-orange-500 underline">coming!</span>
					</p>

					<Link to="/" className="footer__link text-white">
						gblog@gmail.com
					</Link>

					<ul className="footer__links">
						<li className="footer__link-item">
							<Link to="/">
								<img src={links} alt="links" />
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};

export default SiteFooter;
