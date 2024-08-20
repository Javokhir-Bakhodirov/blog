import React from "react";

const Container = ({ children }) => {
	return (
		<div className="container mx-auto py-[15px] max-w-[1250px]">{children}</div>
	);
};

export default Container;
