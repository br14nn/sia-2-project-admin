import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Mainpage from "./pages/Mainpage";
import Announcements from "./components/Announcementspage/Announcements";
import Students from "./components/Studentspage/Students";
import Teachers from "./components/Teacherspage/Teachers";
import Curriculum from "./components/Curriculumpage/Curriculum";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Loginpage />,
	},
	{
		path: "/admin",
		element: <Mainpage />,
		children: [
			{
				path: "announcements",
				element: <Announcements />,
			},
			{
				path: "students",
				element: <Students />,
			},
			{
				path: "teachers",
				element: <Teachers />,
			},
			{
				path: "curriculum",
				element: <Curriculum />,
			},
		],
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
