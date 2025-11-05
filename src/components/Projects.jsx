import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Campus Connect',
    description:
      'A social platform for students to share resources, events, and collaborate. Built with MERN stack and WebSockets for real-time chat.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Placement Tracker',
    description:
      'Dashboard to track applications, interviews, and offers with analytics and export. Role-based auth and email alerts.',
    tags: ['React', 'Redux', 'Firebase', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Algo Visualizer',
    description:
      'Interactive visualizations for sorting and graph algorithms. Focus on learning experience and performance.',
    tags: ['TypeScript', 'Vite', 'Canvas', 'Algorithms'],
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of work showcasing skills across full‑stack development.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="h-36 w-full bg-gradient-to-tr from-indigo-200 to-violet-200" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border bg-white px-2.5 py-0.5 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
