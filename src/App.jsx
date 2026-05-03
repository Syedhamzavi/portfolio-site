const profile = {
  name: "Syed Mujataba Hamzavi",
  title: "Aspiring Data Analyst",
  email: "syedmujtaba1042@gmail.com",
  phone: "+91 6363345883",
  location: "Bengaluru, India",

  resume:
    "https://drive.google.com/file/d/1KWy_eDg34ETBPpziMxDQCR9zDEDqcQh0/view?usp=drive_link",

  github: "https://github.com/Syedhamzavi",

  linkedin: "https://www.linkedin.com/in/syed-hamzavi-31b3a4272/",

  publishedPaper: "https://www.doi.org/10.58257/IJPREMS36622",

  certifications: "https://drive.google.com/drive/folders/1nej-bveqbnMuRVUX2EDzoJLvTCRfvMeF?usp=drive_link",
};

const skills = [
  {
    title: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "Excel", "EDA", "Data Cleaning"],
  },
  {
    title: "BI & Dashboards",
    items: ["Power BI", "Tableau", "DAX", "Power Query", "KPI Reporting"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Model Training", "Prediction Models", "Streamlit"],
  },
  {
    title: "Analytics Workflow",
    items: ["ETL", "Data Modeling", "Reporting", "Visualization", "SQL"],
  },
];

const projects = [
  {
    title: "Sales & Performance Analysis Dashboard",
    tool: "Tableau",
    description:
      "Built an interactive Tableau dashboard to analyze sales, profit, regions, categories, customer segments, KPIs, maps, and trend charts.",
    tags: ["Tableau", "Dashboard", "Sales Analysis"],
    projectLink:
      "https://public.tableau.com/views/TableuAssignment_17772148530390/DASHBOARDsuperstore?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubLink: "https://github.com/Syedhamzavi/Superstore-Dashboard.git",
  },
  {
    title: "Financial Performance Dashboard",
    tool: "Power BI",
    description:
      "Created a multi-page Power BI dashboard using DAX, Power Query, slicers, navigation pages, and KPI cards to analyze sales, profit, discounts, and business performance.",
    tags: ["Power BI", "DAX", "Power Query"],
    projectLink:
      "https://drive.google.com/file/d/1Pp8rZ1mJZEmuDSCG45PFTQXsDuRLZ8PE/view?usp=drive_link",
    githubLink: "https://github.com/Syedhamzavi/Financial-Dashboard-PowerBi.git",
  },
  {
    title: "Finvisor – AI Personal Finance Advisor",
    tool: "Python, Streamlit, Machine Learning",
    description:
      "Developed a Streamlit app for expense tracking, budgeting, category-wise spending analysis, and future expense forecasting using machine learning.",
    tags: ["Python", "Streamlit", "ML", "Finance Analytics"],
    projectLink: "https://finvisor-opkd2klvlnmsd6kdxcb8d2.streamlit.app",
    githubLink: "https://github.com/Syedhamzavi/FINVISOR",
  },
  {
    title: "Multiple Disease Prediction Using ML Model",
    tool: "Python, Streamlit, Machine Learning",
    description:
      "Built a machine learning-based Streamlit application to predict multiple diseases using trained ML models. The project demonstrates preprocessing, model integration, prediction logic, and healthcare analytics.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Healthcare ML"],
    projectLink:
      "https://multiple-disease-prediction-using-ml-model-qevtncaai6ouvtteomv.streamlit.app",
    githubLink:
      "https://github.com/Syedhamzavi/Multiple-Disease-Prediction-Using-ML-Model.git",
  },
];

const certifications = [
  "Gen AI Powered Data Analytics Job Simulation – Forage",
  "Programming with Python – Internshala",
  "Complete Data Science Bootcamp – Udemy",
  "Advanced SQL – Great Learning",
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Hamzavi<span className="text-cyan-400">.Portfolio</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
            <a href="#recognition" className="hover:text-cyan-400">
              Recognition
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      >
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Data Analyst • Python • SQL • Power BI • Tableau • ML
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold text-cyan-300">
              {profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 text-justify">
              AI and Data Science graduate with hands-on experience in data analytics,
              dashboard development, machine learning, and business reporting. Skilled in
              Python, SQL, Power BI, Tableau, Excel, and Streamlit, with projects across
              sales analytics, financial analysis, healthcare prediction, and personal
              finance forecasting. Passionate about transforming raw data into meaningful
              insights, interactive dashboards, and data-driven solutions that support
              better decision-making.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                View Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                LinkedIn
              </a>

              <a
                href={profile.publishedPaper}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Published Paper
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-2xl bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Portfolio Snapshot
              </p>

              <div className="mt-8 grid gap-5">
                <Stat number="6+" label="Portfolio Projects" />
                <Stat number="5+" label="Core Data & ML Tools" />
                <Stat number="9,994" label="Retail Records Analyzed" />
                <Stat number="8.0/10" label="Engineering CGPA" />
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>Location: {profile.location}</p>
            </div>
          </div>
        </div>
      </header>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          small="Capabilities"
          title="Technical Skills"
          description="Skills grouped around data analyst responsibilities: cleaning, querying, analysis, visualization, reporting, machine learning, and dashboard development."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300">
                ✦
              </div>

              <h3 className="text-xl font-bold text-white">{skill.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          small="Selected Work"
          title="Selected Data Analytics & Machine Learning Projects"
          description="A collection of dashboarding, Python, machine learning, Streamlit, and analytics projects built around business and real-world use cases."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          small="Background"
          title="Experience & Education"
          description="Practical internship experience with logistics data and an academic foundation in Artificial Intelligence and Data Science."
        />

        <div className="grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Experience
            </p>

            <h3 className="text-2xl font-bold text-white">
              Data & Backend Engineering Intern
            </h3>

            <p className="mt-2 text-slate-400">
              Eunoia Labs | Sep 2024 – Dec 2024
            </p>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Analyzed real-time GPS and fleet assignment data.</li>
              <li>
                • Worked on ETL pipelines using APIs and database operations.
              </li>
              <li>• Supported logistics reporting and operational tracking.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Education
            </p>

            <h3 className="text-2xl font-bold text-white">
              B.E. in Artificial Intelligence and Data Science
            </h3>

            <p className="mt-2 text-slate-400">
              Channabasaveshwara Institute of Technology, VTU
            </p>

            <p className="mt-6 rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-cyan-300">
              CGPA: 8.0 / 10
            </p>
          </div>
        </div>
      </section>

      <section id="recognition" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          small="Recognition"
          title="Achievements & Certifications"
          description="Academic, research, and certification highlights supporting my data analytics and machine learning profile."
        />

        <div className="grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Achievements</h3>

            <div className="mt-6 space-y-5 text-slate-300">
              <div>
                <p>
                  • Published research paper: AI-Driven Framework for Epidemic
                  Management & Diagnostic Imaging in IJPREMS.
                </p>

                <a
                  href={profile.publishedPaper}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Published Paper
                </a>
              </div>

              <p>
                • Participated in Shark Tank Snehada Kadalu 2K24 and was
                recognized for innovation.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Certifications</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              {certifications.map((cert) => (
                <li key={cert}>• {cert}</li>
              ))}
            </ul>

            <a
              href={profile.certifications}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View All Certifications
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Open to Data Analyst Opportunities
          </h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            Available for entry-level data analyst roles involving SQL, Python,
            Power BI, Tableau, Excel, dashboards, reporting, machine learning,
            and business insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © 2026 Syed Mujataba Hamzavi | Data Analyst Portfolio
      </footer>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-3xl font-extrabold text-cyan-300">{number}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function SectionHeading({ small, title, description }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {small}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-slate-400">{description}</p>
    </div>
  );
}

function ProjectCard({
  title,
  tool,
  description,
  tags,
  projectLink,
  githubLink,
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07]">
      <p className="text-sm font-semibold text-cyan-300">{tool}</p>

      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>

      <p className="mt-4 leading-7 text-slate-400">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          View Project
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}