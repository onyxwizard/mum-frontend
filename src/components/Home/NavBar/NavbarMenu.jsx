import { useState } from "react";

const navigationLinks = [
	{ label: "Agence", href: "/agence/" },
	{ label: "Services", href: "/services/" },
	{ label: "Projets", href: "/projets/" },
	{ label: "Clients", href: "/clients/" },
	{ label: "Insights", href: "/blog/" },
];

const services = [
	{
		title: "Strategy",
		href: "/strategie/",
		image: "98123-533-600-Crop.jpg",
		links: [
			{ label: "Stratégie marketing", href: "/strategie/" },
			{
				label: "Web Analytics & Reporting",
				href: "/strategie/analytics-reporting/",
			},
		],
	},
	{
		title: "Creation",
		href: "/creation/",
		image: "122647-533-600-Crop.jpg",
		links: [
			{ label: "Design & Identité graphique", href: "/creation/" },
			{ label: "Création de sites web", href: "/creation/sites-web/" },
			{
				label: "Création de contenu & storytelling",
				href: "/creation/creation-de-contenu/",
			},
		],
	},
	{
		title: "Marketing",
		href: "/marketing/",
		image: "120771-533-600-Crop.jpg",
		links: [
			{ label: "Marketing 360°", href: "/marketing/" },
			{
				label: "Référencement (SEO/GEO)",
				href: "/marketing/seo-referencement-naturel/",
			},
			{
				label: "Publicité en ligne (SEA/SMA)",
				href: "/marketing/publicite-en-ligne/",
			},
			{
				label: "Social Media Marketing (SMM)",
				href: "/marketing/social-media/",
			},
			{
				label: "Marketing par e-mail",
				href: "/marketing/e-mail-marketing/",
			},
		],
	},
	{
		title: "Applications",
		href: "/applications/",
		image: "122634-533-600-Crop.jpg",
		links: [
			{ label: "Applications web", href: "/applications/" },
			{
				label: "CMS - Systèmes de gestion des contenus",
				href: "/applications/systemes-de-gestion-des-contenus/",
			},
			{
				label: "Cloud Services",
				href: "/applications/services-cloud/",
			},
			{
				label: "Solutions IA",
				href: "/applications/outils-ia/",
			},
		],
	},
];

const imageBaseUrl = "https://www.mum.lu/images/";

const NavbarMenu = ({ isOpen, onClose }) => {
	const [activeService, setActiveService] = useState(null);

	const closeMenu = () => {
		setActiveService(null);
		onClose();
	};

	return (
		<nav
			id="mum-main-navigation"
			className="mainnav"
			aria-label="Main navigation"
			aria-hidden={!isOpen}
		>
			<div className="mainnav-in">
				<ul className="navigation navigation-level-1">
					{navigationLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								tabIndex={isOpen ? 0 : -1}
								onClick={closeMenu}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<nav className="languages" aria-label="Language">
					<a href="/" className="selected" tabIndex={isOpen ? 0 : -1}>
						fr
					</a>
					<a href="/de/" tabIndex={isOpen ? 0 : -1}>
						de
					</a>
				</nav>

				<div className="menu-container">
					<div className="mainnav-inner">
						<div className="mainnav-servicethumb">
							<img
								src={`${imageBaseUrl}121216-533-600-Crop.jpg`}
								alt="MUM digital agency"
								className={activeService === null ? "is-active" : ""}
							/>

							{services.map((service) => (
								<img
									key={service.title}
									src={`${imageBaseUrl}${service.image}`}
									alt={`MUM Services — ${service.title}`}
									className={activeService === service.title ? "is-active" : ""}
								/>
							))}
						</div>

						<div className="mainnav-servicenav">
							{services.map((service) => (
								<div
									key={service.title}
									className="servicenav-item"
									onMouseEnter={() => setActiveService(service.title)}
									onMouseLeave={() => setActiveService(null)}
								>
									<a
										href={service.href}
										tabIndex={isOpen ? 0 : -1}
										onClick={closeMenu}
									>
										<span className="service-title">{service.title}</span>
									</a>

									<ul className="catlist">
										{service.links.map((link) => (
											<li key={link.label}>
												<a
													href={link.href}
													tabIndex={isOpen ? 0 : -1}
													onClick={closeMenu}
												>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						<div className="mainnav-cta">
							<p>Votre agence aujourd&apos;hui</p>
							<a
								href="/contact/"
								className="btn-outline"
								tabIndex={isOpen ? 0 : -1}
								onClick={closeMenu}
							>
								Votre Projet
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarMenu;
