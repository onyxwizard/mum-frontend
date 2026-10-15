
const values = [
  {
    title: "Think ahead",
    text: "We anticipate challenges and plan for the future.",
  },
  {
    title: "Made-to-measure",
    text: "We tailor our solutions to each client's goals.",
  },
  {
    title: "Team of experts",
    text: "Our specialists bring the right skills to each project.",
  },
  {
    title: "Just in time",
    text: "We value responsiveness and reliable delivery.",
  },
];

export default function About() {
  return (
    <section className="bg-light py-5">
      <div className="container py-lg-4">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5" data-aos="fade-up">
            <p className="small text-uppercase text-secondary fw-semibold">
              About our agency
            </p>

            <h2 className="display-5 fw-bold">
              Human expertise behind digital.
            </h2>

            <p className="text-secondary mt-3">
              We combine experience, creativity and technology to help
              businesses build a stronger digital presence.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row row-cols-1 row-cols-sm-2 g-3">
              {values.map((value, index) => (
                <div className="col" key={value.title}>
                  <article
                    className="card h-100 rounded-0 border-0 shadow-sm"
                    data-aos="fade-up"
                  >
                    <div className="card-body p-4">
                      <span className="small text-info fw-semibold">
                        0{index + 1}
                      </span>

                      <h3 className="h5 fw-bold mt-3">
                        {value.title}
                      </h3>

                      <p className="text-secondary small mb-0">
                        {value.text.replace("client's", "client’s")}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
