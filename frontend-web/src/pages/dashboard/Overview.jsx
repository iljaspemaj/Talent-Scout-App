import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileNavbar from '../../components/navbar/ProfileNavbar';
import Image from '../../assets/Katheryn Murphy.png'
import { FaPhoneAlt } from "react-icons/fa";
// Mock data - në praktikë, kjo do të merret nga API
const Talents = [
    {
        id: 1,
        name: "Luke Anderson",
        description: "Building client UIs and Integrating APIs for a seamless user experience.",
        skills: ["NodeJS", "JavaScript", "API Integration"],
        availability: "Available Now",
        experience: "Beginner",
    },
    {
        id: 2,
        name: "Sarah Martinez",
        description: "Analyzing data trends and building smart recommendations models.",
        skills: ["Python", "Data Analysis", "Machine Learning"],
        availability: "Part-Time Only",
        experience: "Advanced",
    },
    {
        id: 3,
        name: "Alex Wong",
        description: "Developing scalable backend systems and managing application logic.",
        skills: ["Node.js", "Java", "Backend Development"],
        availability: "Full-Time Only",
        experience: "Advanced",
    },
    {
        id: 4,
        name: "Emma Thompson",
        description: "Creating beautiful and functional user interfaces with modern design principles.",
        skills: ["UI/UX Design", "Figma", "Tailwind CSS"],
        availability: "Available Now",
        experience: "Intermediate",
    },
    {
        id: 5,
        name: "Michael Johnson",
        description: "Specializing in cloud infrastructure and DevOps solutions for enterprise applications.",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        availability: "Full-Time Only",
        experience: "Advanced",
    },
    {
        id: 6,
        name: "Olivia Davis",
        description: "Mobile app developer with a passion for creating intuitive user experiences.",
        skills: ["React Native", "Swift", "iOS Development"],
        availability: "Part-Time Only",
        experience: "Intermediate",
    },
{
    id: 7,
    name: "Katheryn Murphy",
    description: "Katheryn is a passionate and detail-oriented web developer with over 4 years of experience building responsive and user-centric applications. She specializes in ReactJS, TailwindCSS, and modern JavaScript frameworks. Known for clean code and efficient problem-solving, she thrives in collaborative environments and is always eager to learn emerging technologies.",
    skills: ["ReactJs", "Node.js", "PostgreSQL",],
    availability: "Available Now",
    experience: "Advanced",
    education: "Bachelor of Science In Computer Science, University of Triana",
    workExperience: [
    { role: "Web Developer", company: "MakerMinds", description: "Completed a 6-month intensive training program focused on full-stack web development. Collaborated on real-world projects using ReactJS, Node.js, and PostgreSQL." }
    ],
    projects: [
    { name: "Restaurantista App", url: "https://restaurant-app-neon-nine.vercel.app/" },
    { name: "Car Dealership", url: "https://car-dealership-flax.vercel.app/"}
    ],
    reviews: [
    { skill: "ReactJS", rating: 90 }
    ]
},
];

const Overview = () => {
const { name } = useParams(); 

const talent = Talents.find(t => 
    t.name.toLowerCase().replace(/\s+/g, '-') === name
);

if (!talent) return <div>Talent not found</div>;

return (
    <div className='bg-[#F8F8F8] min-h-screen pb-12'>
        <ProfileNavbar />
    <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-white w-[807px] rounded-xl shadow-sm p-8 mt-1 mb-8 overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-start gap-8">
        <div className="w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden flex-shrink-0">
            <img 
                src={Image}
                alt={talent.name} 
                className="w-full h-full object-cover"
            />
        </div>

          {/* Basic Info */}
        <div className="pt-2"> 
            <h1 className="text-3xl font-bold text-gray-800 mb-2"> 
            {talent.name}
            </h1>
            
            {/* Availability */}
            <div className="mb-6"> 
            <span className="px-0 py-2 font-semibold text-[#6FB63A] rounded-full flex items-center w-fit">
                <span className="w-5 h-5 rounded-full bg-green-500 mr-2"></span>
                {talent.availability}
            </span>
            </div>
        </div>
        </div>
        
        {/* Description */}
        <section>
            <h2 className="text-2xl font-medium text-black mb-4">Overview</h2>
            <p className="text-gray-700 font-medium text-base leading-relaxed max-w-3xl">
            "{talent.description}"
            </p>
        </section>

        {/* Education */}
            <section>
                <h2 className="text-2xl font-medium text-black my-4">Education</h2>
                <p className="text-gray-700 font-medium text-base">{talent.education}</p>
            </section>

        {/* Experience */}
            <section>
                <h2 className="text-2xl font-medium text-black my-4">Experience</h2>
                {talent.workExperience.map((exp, index) => (
                <div key={index} className="last:mb-0">
                    <h3 className="text-xl font-medium text-black mb-4">{exp.role} – {exp.company}</h3>
                    <p className="text-gray-700 font-medium text-base leading-relaxed">{exp.description}</p>
                </div>
            ))}
            </section>

            {/* Contact Section */}
            <section>
                <h2 className="text-2xl font-medium text-black my-4">Contact {talent.name.split(' ')[0]}</h2>
            <div className="flex items-center gap-2 hover:text-blue-600">
                <FaPhoneAlt/>
                <p className="font-medium text-base">069 982 9506</p>
            </div>
            </section>
        </div>

        {/* Kontejneri Skills */}
        <div className="bg-white w-80 rounded-xl shadow-sm p-8 mb-8 overflow-hidden">
            <h2 className="text-2xl font-medium text-black mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
            {talent.skills.map((skill, index) => (
            <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium"
            >
                {skill}
            </span>
            ))}
            </div>
        </div>

        {/* Kontejneri Projects */}
        <div className="bg-white w-80 rounded-xl shadow-sm p-8 mb-8 overflow-hidden">
            <h2 className="text-2xl font-medium text-black mb-6">Projects</h2>
            {talent.projects.map((project, index) => (
            <div key={index} className="mb-4 last:mb-0">
            <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
            >
                {project.name}
            </a>
            </div>
        ))}
        </div>
    </div>
    </div>
);
};

export default Overview;