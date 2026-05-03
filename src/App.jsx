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

  certifications:
    "https://drive.google.com/drive/folders/1nej-bveqbnMuRVUX2EDzoJLvTCRfvMeF?usp=drive_link",
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
      "Built an interactive Tableau dashboard analyzing retail sales across 3 categories and 4 regions. Included a dynamic metric selector, monthly profit trend, state-level geographic mapping, and segment-wise profitability breakdown. Surfaced KPIs including $2.33M in sales, 12.56% profit margin, and 7.90% return rate.",
    tags: ["Tableau", "Sales Analysis", "KPIs", "Dashboard"],
    projectLink:
      "https://public.tableau.com/views/TableuAssignment_17772148530390/DASHBOARDsuperstore?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubLink: "https://github.com/Syedhamzavi/Superstore-Dashboard.git",
  },
  {
    title: "Financial Performance Dashboard",
    tool: "Power BI",
    description:
      "Built a 2-page Power BI financial dashboard analyzing $118.73M in sales and $16.89M in profit across 5 countries and 6 product lines from 2013 to 2014. Implemented DAX measures, discount band analysis, monthly trend charts, cross-page navigation, and dynamic slicers for country, year, and segment-level filtering.",
    tags: ["Power BI", "DAX", "Financial Analysis", "Power Query"],
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
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Hamzavi<span className="text-cyan-400">.Portfolio</span>
          </a>

          <div className="flex w-full gap-4 overflow-x-auto whitespace-nowrap pb-1 text-xs text-slate-300 sm:w-auto sm:gap-6 sm:pb-0 sm:text-sm">
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
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-80 sm:w-80"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl sm:h-80 sm:w-80"></div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm">
              Data Analyst • Python • SQL • Power BI • Tableau • ML
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl font-semibold text-cyan-300 sm:text-2xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-justify text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              AI and Data Science graduate with hands-on experience in data
              analytics, dashboard development, machine learning, and business
              reporting. Skilled in Python, SQL, Power BI, Tableau, Excel, and
              Streamlit, with projects across sales analytics, financial
              analysis, healthcare prediction, and personal finance forecasting.
              Passionate about transforming raw data into meaningful insights,
              interactive dashboards, and data-driven solutions that support
              better decision-making.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 sm:w-auto"
              >
                View Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
              >
                LinkedIn
              </a>

              
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="rounded-2xl bg-slate-950/80 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
                Portfolio Snapshot
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <Stat number="6+" label="Projects Completed" />
                <Stat number="5+" label="Core Data & ML Tools" />
                <Stat
                  number="1,900+"
                  label="Records Analyzed Across Dashboards"
                />
                <Stat number="8.0/10" label="Engineering CGPA" />
              </div>
            </div>

            <div className="mt-6 space-y-3 break-words text-sm text-slate-300">
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>Location: {profile.location}</p>
            </div>
          </div>
        </div>
      </header>

      <section
        id="skills"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionHeading
          small="Capabilities"
          title="Technical Skills"
          description="Skills grouped around data analyst responsibilities: cleaning, querying, analysis, visualization, reporting, machine learning, and dashboard development."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07] sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300">
                ✦
              </div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {skill.title}
              </h3>

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

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionHeading
          small="Selected Work"
          title="Selected Data Analytics & Machine Learning Projects"
          description="A collection of dashboarding, Python, machine learning, Streamlit, and analytics projects built around business and real-world use cases."
        />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionHeading
          small="Background"
          title="Experience & Education"
          description="Practical internship experience with logistics data and an academic foundation in Artificial Intelligence and Data Science."
        />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8">
            <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Experience
            </p>

            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Data & Backend Engineering Intern
            </h3>

            <p className="mt-2 text-slate-400">
              Eunoia Labs | Sep 2024 – Dec 2024
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
              <li>• Analyzed real-time GPS and fleet assignment data.</li>
              <li>
                • Worked on ETL pipelines using APIs and database operations.
              </li>
              <li>• Supported logistics reporting and operational tracking.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8">
            <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Education
            </p>

            <h3 className="text-xl font-bold text-white sm:text-2xl">
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

      <section
        id="recognition"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionHeading
          small="Recognition"
          title="Achievements & Certifications"
          description="Academic, research, and certification highlights supporting my data analytics and machine learning profile."
        />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Achievements
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
              <div>
                <p>
                  • Published research paper: AI-Driven Framework for Epidemic
                  Management & Diagnostic Imaging in IJPREMS.
                </p>

                <a
                  href={profile.publishedPaper}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full justify-center rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
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

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Certifications
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
              {certifications.map((cert) => (
                <li key={cert}>• {cert}</li>
              ))}
            </ul>

            <a
              href={profile.certifications}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full justify-center rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              View All Certifications
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6 shadow-2xl sm:p-10">
          <p className="text-xs uppercase align-center text-center tracking-[0.25em] text-cyan-300 sm:text-sm">
          <strong>  Contact </strong>
          </p>

          <h2 className="mt-4 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl">
            Open to Data Analyst Opportunities
          </h2>

          <p className="mt-4 max-w-6xl text-justify text-sm leading-7 text-slate-300 sm:text-base">
          Available for entry-level data analyst roles involving SQL, Python,
          Power BI, Tableau, Excel, dashboards, reporting, machine learning,
          and business insights.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="w-full rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              Email Me
            </a>

            
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-400 sm:text-sm">
        © 2026 Syed Mujataba Hamzavi | Data Analyst Portfolio
      </footer>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <p className="text-2xl font-extrabold text-cyan-300 sm:text-3xl">
        {number}
      </p>
      <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

function SectionHeading({ small, title, description }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
        {small}
      </p>

      <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
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
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07] sm:p-7">
      <p className="text-sm font-semibold text-cyan-300">{tool}</p>

      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>

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

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="w-full rounded-xl bg-cyan-400 px-5 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
        >
          View Project
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="w-full rounded-xl border border-white/20 px-5 py-2 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}