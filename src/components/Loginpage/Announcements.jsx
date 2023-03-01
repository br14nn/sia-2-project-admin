import AnnouncementItem from "./AnnouncementItem";

export default function () {
	return (
		<div className="w-full tablet:w-95% h-full tablet:h-95% bg-theme-blue tablet:bg-opacity-75 tablet:rounded-lg overflow-y-auto">
			<header className="bg-theme-red tablet:text-5xl text-white font-extrabold tracking-widest w-fit pt-3 pr-10 pb-2 pl-5 rounded-br-full">
				ANNOUNCEMENTS
			</header>
			<AnnouncementItem
				title="Topic 1"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, obcaecati ea, asperiores ipsa quasi cum nihil nisi voluptas non voluptatum doloribus iste, illum eum hic explicabo. Perspiciatis sunt ipsa blanditiis sint, est dolorum saepe voluptas reiciendis eaque voluptatem odit nam ab omnis laboriosam placeat ea quod quas aspernatur, incidunt, nulla ducimus. Cupiditate nulla deleniti, quia at sequi harum perspiciatis incidunt eum doloremque exercitationem voluptatem aspernatur?"
			/>
			<AnnouncementItem
				title="Topic 2"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, obcaecati ea, asperiores ipsa quasi cum nihil nisi voluptas non voluptatum doloribus iste, illum eum hic explicabo. Perspiciatis sunt ipsa blanditiis sint, est dolorum saepe voluptas reiciendis eaque voluptatem odit nam ab omnis laboriosam placeat ea quod quas aspernatur, incidunt, nulla ducimus. Cupiditate nulla deleniti, quia at sequi harum perspiciatis incidunt eum doloremque exercitationem voluptatem aspernatur?"
			/>
			<AnnouncementItem
				title="Topic 3"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, obcaecati ea, asperiores ipsa quasi cum nihil nisi voluptas non voluptatum doloribus iste, illum eum hic explicabo. Perspiciatis sunt ipsa blanditiis sint, est dolorum saepe voluptas reiciendis eaque voluptatem odit nam ab omnis laboriosam placeat ea quod quas aspernatur, incidunt, nulla ducimus. Cupiditate nulla deleniti, quia at sequi harum perspiciatis incidunt eum doloremque exercitationem voluptatem aspernatur?"
			/>
		</div>
	);
}
