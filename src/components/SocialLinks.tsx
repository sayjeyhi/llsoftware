
import { Github, Twitter, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/sayjeyhi",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/sayjeyhi",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/jafar-rezaei",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex gap-6 items-center justify-center fade-in-delay-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-400 dark:hover:text-white"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
