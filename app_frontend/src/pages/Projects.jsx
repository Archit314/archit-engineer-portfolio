import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "NIWISH",
    status: "Active",
    type: "professional",
    description:
      "Niwish is a platform where you can Buy/Sell Metal (Gold/Silver), Buy Coins & Create SIP starting with ₹1.",
    tech: [
        "JavaScript",
        "TypeScript",
        "Adonis.Js",
        "MongoDB",
        "Express.Js",
        "React.Js",
        "Node.Js",
        "AWS",
        "Firebase",
        "GupShup",
        "Cashfree",
        "Easebuzz"
    ],
    logo:
      "https://media.licdn.com/dms/image/v2/D560BAQH0AIAuF4W8Hw/company-logo_200_200/B56ZXOZjMmHEAI-/0/1742924560410?e=2147483647&v=beta&t=u5ZqsfjQ0ZUI3bUdDZ436BejhBfcSKbhr0PoBVyyutM",
  },
  {
    id: 2,
    title: "Archit Kumar | Senior Software Engineer",
    status: "Completed",
    type: "self",
    description:
      "Personal developer portfolio showcasing projects, skills, and experience.",
    tech: ["React.Js", "Tailwind CSS", "Vite"],
    logo: "/vite.svg",
  },
  {
    id: 3,
    title: "Vasundhara Diamond Roof",
    status: "Active",
    type: "professional",
    description:
      "Role-based admin system for transactions, users, and reports.",
    tech: ["Adonis.Js", "TypeScript", "PostgreSQL", "Firebase", "GupShup", "Easebuzz", "Cashfree", "Jiopayment"],
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWE-LgNCP_QjOytmqPCdfphpXEVcKBeFy3Q&s",
  },
]

function Skills() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter)

  return (
    <div className="flex flex-col gap-9 p-6">
      {/* Terminal Heading */}
      <h1 className="p-4 text-green-300">
        archit<span className="text-gray-300">@</span>
        <span className="text-purple-400">dev:</span>
        <span className="text-sky-300">~/projects</span>
        <span className="text-green-300">$</span>
        <span className="text-gray-200"> ls -la --color</span>
      </h1>

      {/* Filters */}
      <div className="flex gap-4 px-4">
        {["all", "professional", "self"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-1 rounded-xl border text-sm capitalize transition
              ${
                filter === item
                  ? "border-green-400 text-green-300 bg-green-400/10"
                  : "border-gray-600 text-gray-400 hover:text-green-300 hover:border-green-400"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-3 border border-gray-600 rounded-2xl p-3"
          >
            <div className="flex gap-3">
              <img
                src={project.logo}
                alt={project.title}
                className="w-14 h-14 object-contain rounded-md bg-gray-800 p-1"
              />

              <div>
                <h1 className="text-gray-200">{project.title}</h1>
                <h1 className="text-green-300">{project.status}</h1>
              </div>
            </div>

            <p className="text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-cyan-400">
              {project.tech.map((t) => (
                <div
                  key={t}
                  className="border border-gray-600 rounded-xl px-2 py-1 text-sm"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
