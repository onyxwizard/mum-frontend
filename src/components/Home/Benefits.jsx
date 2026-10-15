const benefits = [
	{
		title: "More visibility",
		text: "Build a stronger brand and stand out from competitors.",
	},
	{
		title: "Customer growth",
		text: "Reach the right audience and grow your business.",
	},
	{
		title: "Better recruitment",
		text: "Attract talented people to your team.",
	},
	{
		title: "Digital efficiency",
		text: "Simplify everyday work with digital solutions.",
	},
];

export default function Benefits() {
	return (
		<section className="bg-light py-5">
			<div className="container py-lg-4">
				<div className="mb-4" data-aos="fade-up">
					<p className="small text-uppercase text-secondary fw-semibold">
						Why digital marketing?
					</p>

					<h2 className="display-5 fw-bold">Ideas that create impact.</h2>
				</div>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
					{benefits.map((benefit, index) => (
						<div className="col" key={benefit.title}>
							<article className="card border-0 rounded-0 h-100 shadow-sm">
								<div className="card-body p-4">
									<small className="text-info fw-semibold">0{index + 1}</small>

									<h3 className="h5 fw-bold mt-4">{benefit.title}</h3>

									<p className="text-secondary small mb-0">{benefit.text}</p>
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
