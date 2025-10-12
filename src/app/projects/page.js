import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Softaculous Virtualizor",
      category: "Installation & Management",
      description: "Virtualizor is a powerful web based VPS Control Panel using which a user can deploy and manage VPS on servers with a single click. We use Virtualizor to manage all our Virtual Servers using KVM virtualization.",
      link: "https://r.jod.gg/qKZLj",
      color: "purple"
    },
    {
      title: "Plesk Obsidian",
      category: "Installation & Management",
      description: "Plesk is a commercial web hosting and server data center automation software developed for Linux and Windows-based retail hosting service providers. We use Plesk to manage all our public and private websites/projects.",
      link: "https://r.jod.gg/WcJip",
      color: "blue"
    },
    {
      title: "Pterodactyl Panel",
      category: "Installation & Management",
      description: "Pterodactyl® is a free, open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users. We use Pterodactyl for managing our Minecraft Servers, Discord Bots and more.",
      link: "https://r.jod.gg/WeKvJ",
      color: "green"
    },
    {
      title: "URL Shortner",
      category: "Custom Development",
      description: "A Public URL Shortner with Redirection Tools, Powerful Statistics, Beautiful Profiles, QR Code Generator and a Powerful Dashboard. We and our Partners use the URL Shortner. Feel free to register and try it out.",
      link: "https://jnshort.com",
      color: "emerald"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/60 shadow-purple-500/20",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/60 shadow-blue-500/20",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/60 shadow-green-500/20",
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 hover:border-emerald-500/60 shadow-emerald-500/20"
    };
    return colors[color] || colors.green;
  };

  const getBadgeColor = (color) => {
    const colors = {
      purple: "bg-purple-500/20 text-purple-400",
      blue: "bg-blue-500/20 text-blue-400",
      green: "bg-green-500/20 text-green-400",
      emerald: "bg-emerald-500/20 text-emerald-400"
    };
    return colors[color] || colors.green;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We pride ourselves on our high-quality software installations.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Here you can learn more about what we have achieved.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br backdrop-blur-md border transition-all duration-300 hover:scale-105 shadow-lg ${getColorClasses(project.color)}`}
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${getBadgeColor(project.color)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-green-400 transition-colors duration-300 font-medium group"
                >
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="text-gray-400 text-base sm:text-lg">
              Expect to see more installations or custom projects soon!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
