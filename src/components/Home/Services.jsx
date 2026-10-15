const services = [
	{
		name: "Strategy",
		description: "Plan the right direction for your business.",
		items: ["Marketing strategy", "Analytics & reporting"],
	},
	{
		name: "Creation",
		description: "Build a distinctive and consistent brand.",
		items: ["Brand identity", "Website design", "Content creation"],
	},
	{
		name: "Marketing",
		description: "Reach the right audience and measure results.",
		items: ["SEO / GEO", "Online advertising", "Social media"],
	},
	{
		name: "Applications",
		description: "Make your digital processes more efficient.",
		items: ["Web applications", "CMS", "Cloud services", "AI solutions"],
	},
];

export default function Services() {
	return (
		<section className="container py-5">
			<div className="row mb-4">
				<div className="col-lg-8" data-aos="fade-up">
					<p className="small text-uppercase text-secondary fw-semibold">
						À la carte or full-service
					</p>
					<h2 className="display-5 fw-bold">Services that move you forward.</h2>
					<p className="text-secondary">
						From strategy to implementation, our services work together to
						support your business goals.
					</p>
				</div>
			</div>

			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
				{services.map((service, index) => (
					<div className="col" key={service.name}>
						<article
							className="card rounded-0 h-100 border-0 border-top border-4 border-info shadow-sm"
							data-aos="fade-up"
						>
							<div className="card-body p-4">
								<span className="small text-info fw-semibold">
									0{index + 1}
								</span>

								<h3 className="h4 fw-bold mt-4">{service.name}</h3>

								<p className="small text-secondary">{service.description}</p>

								<hr />

								<ul className="list-unstyled small mb-0">
									{service.items.map((item) => (
										<li className="mb-2" key={item}>
											{item}
										</li>
									))}
								</ul>
							</div>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
