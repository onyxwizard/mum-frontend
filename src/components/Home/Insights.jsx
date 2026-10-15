const articles = [
	{
		category: "DIGITAL",
		title: "SME Package Digital: 70% funding for your website",
		image: "https://www.mum.lu/thumbnails/113596-800-600-Crop.jpg",
	},
	{
		category: "WEB MARKETING",
		title: "How to improve your website's visibility on Google",
		image: "https://www.mum.lu/thumbnails/99574-800-600-Crop.jpg",
	},
];

export default function Insights() {
	return (
		<section className="container py-5">
			<div className="mb-4" data-aos="fade-up">
				<p className="small text-uppercase text-secondary fw-semibold">
					Good to know
				</p>

				<h2 className="display-5 fw-bold">Latest marketing insights.</h2>
			</div>

			<div className="row row-cols-1 row-cols-md-2 g-4">
				{articles.map((article) => (
					<div className="col" key={article.title}>
						<article className="card h-100 rounded-0 border-0 shadow-sm">
							<div className="ratio ratio-16x9">
								<img
									src={article.image}
									alt={article.title}
									className="w-100 h-100 object-fit-cover"
									loading="lazy"
								/>
							</div>

							<div className="card-body p-4">
								<span className="badge text-bg-info mb-3">
									{article.category}
								</span>

								<h3 className="h4 fw-bold">{article.title}</h3>
							</div>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
