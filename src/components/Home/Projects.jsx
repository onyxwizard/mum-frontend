const projects = [
	{
		name: "Lampertz Stone Designer",
		description: "A digital showcase for a natural stone specialist.",
		image: "https://www.mum.lu/thumbnails/100060-400-225-Crop.png",
	},
	{
		name: "Restaurant Le Jardin",
		description: "An elegant digital presence for a restaurant.",
		image: "https://www.mum.lu/thumbnails/100053-400-225-Crop.png",
	},
	{
		name: "AS Bau",
		description: "A tailored website for a construction company.",
		image: "https://www.mum.lu/thumbnails/99788-400-225-Crop.png",
	},
	{
		name: "Hotel Bütgenbacher Hof",
		description: "A digital experience for a hotel and restaurant.",
		image: "https://www.mum.lu/thumbnails/100056-800-500-Crop.jpg",
	},
	{
		name: "Palm wood interior",
		description: "A visual showcase for interior design projects.",
		image: "https://www.mum.lu/thumbnails/100068-400-225-Crop.jpg",
	},
];

export default function Projects() {
	return (
		<section className="container py-5">
			<div className="mb-4" data-aos="fade-up">
				<p className="small text-uppercase text-secondary fw-semibold">
					Fresh work from our team
				</p>

				<h2 className="display-5 fw-bold">Recent projects.</h2>
			</div>

			<div className="row row-cols-1 row-cols-md-2 g-4">
				{projects.map((project) => (
					<div className="col" key={project.name}>
						<article data-aos="fade-up">
							<div className="ratio ratio-16x9 bg-light">
								<img
									src={project.image}
									alt={project.name}
									className="w-100 h-100 object-fit-contain"
									loading="lazy"
								/>
							</div>

							<h3 className="h5 fw-bold mt-3">{project.name}</h3>

							<p className="text-secondary small">{project.description}</p>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
