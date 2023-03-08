import HeaderStyle1 from "../Headers/HeaderStyle1";
import AnnouncementDivHeader from "./AnnouncementDivHeader";
import CreatedAnnouncement from "./CreatedAnnouncement";

export default function () {
	return (
		<div className="flex h-full w-full flex-col bg-theme-light-blue">
			<HeaderStyle1 title="ANNOUNCEMENTS" />

			<section className="mx-auto flex w-1500px flex-col gap-5 overflow-y-auto px-10 py-5">
				<AnnouncementDivHeader title="UPLOAD ANNOUNCEMENT" />

				<div className="mx-5 flex items-center gap-2">
					<label htmlFor="titleInput" className="text-4xl font-bold text-white">
						Title:
					</label>
					<input
						className="h-12 w-40% rounded-md border-2 border-theme-blue pl-3 shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
						id="titleInput"
					/>
				</div>
				<div className="mx-5">
					<label htmlFor="contentInput" className="text-4xl font-bold text-white">
						Content:
					</label>
					<textarea
						className="block h-56 w-full resize-none rounded-md border-2 border-theme-blue p-3 shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
						id="contentInput"
					></textarea>
				</div>
				<button className="ml-auto mr-5 w-fit rounded-lg bg-green-600 px-5 text-xl font-bold text-white">
					UPLOAD
				</button>
				<AnnouncementDivHeader title="ANNOUNCEMENTS" />

				<div className="flex flex-col gap-10"></div>
			</section>
		</div>
	);
}
