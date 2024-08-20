import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const SinglePAge = lazy(() => import("../routes/single-page/SinglePage"));
const Home = lazy(() => import("../routes/home/Home"));

const RouteController = () => {
	return useRoutes([
		{
			path: "/",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					<Home />
				</Suspense>
			),
		},
		{
			path: "/:id",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					{" "}
					<SinglePAge />{" "}
				</Suspense>
			),
		},
	]);
};

export default RouteController;
