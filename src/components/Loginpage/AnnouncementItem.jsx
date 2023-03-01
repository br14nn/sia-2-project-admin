export default function (props) {
	return (
		<div className="px-5 tablet:px-20 my-10">
			<header className="text-2xl tablet:text-4xl font-extrabold text-white">{props.title}</header>
			<section className="mt-5">
				<p className="text-xl tablet:text-3xl text-white text-justify">{props.content}</p>
			</section>
		</div>
	);
}
