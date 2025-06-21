import React, { useState } from 'react';
import TalentSearchNavbar from '../components/TalentSearchNavbar';
import TalentSearchFilter from '../components/TalentSearchFilter';
import TalentCard from '../components/TalentCard';

const TalentSearchPage = () => {
const [filters, setFilters] = useState({
    skills: [],
    availability: [],
    experience: [],
});

const [selectedExperience, setSelectedExperience] = useState('all');

const handleFilterChange = (category, value) => {
    setFilters(prev => {
        const newFilters = { ...prev };
        if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
        newFilters[category] = [...newFilters[category], value];
    }
    return newFilters;
    });
};

const handleExperienceFilterChange = (value) => {
    setSelectedExperience(value);
    if (value === 'all') {
        setFilters(prev => ({ ...prev, experience: [] }));
    } else {
        setFilters(prev => ({ ...prev, experience: [value] }));
    }
};

  // Sample talent data
const talents = [
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
        description: "Passionate and detail-oriented Web Developer with 4+ years of experience building responsive applications.",
        skills: ["ReactJs", "Node.js", "PostgreSQL",],
        availability: "Available Now",
        experience: "Intermediate",
    }
];

  // Filter talents based on selected filters
const filteredTalents = talents.filter(talent => {
    // Skills filter
    if (filters.skills.length > 0 && 
        !filters.skills.some(skill => talent.skills.includes(skill))) {
    return false;
    }
    
    // Availability filter
    if (filters.availability.length > 0 && 
        !filters.availability.includes(talent.availability)) {
    return false;
    }
    
    // Experience filter
    if (filters.experience.length > 0 && 
        !filters.experience.includes(talent.experience)) {
    return false;
    }
    
    return true;
});

return (
    <div className='bg-[#F8F8F8] min-h-screen'>
    <TalentSearchNavbar 
        onExperienceFilterChange={handleExperienceFilterChange}
        selectedExperience={selectedExperience}
    />
    <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Column */}
        <div className="md:w-1/4">
            <TalentSearchFilter 
                onFilterChange={handleFilterChange} 
                selectedFilters={filters}
            />
        </div>

          {/* Results Column */}
        <div className="md:w-3/4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Talent Search</h1>
            </div>


            {filteredTalents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTalents.map(talent => (
                <TalentCard
                    key={talent.id}
                    name={talent.name}
                    description={talent.description}
                    skills={talent.skills}
                    availability={talent.availability}
                    experience={talent.experience}
                />
                ))}
            </div>
            ) : (
            <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-gray-500 mb-4">No talents match your current filters</div>
                <button 
                    className="text-blue-600 font-medium hover:text-blue-800 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    onClick={() => setFilters({skills: [], availability: [], experience: []})}
                >
                    Clear all filters
                </button>
            </div>
            )}
        </div>
        </div>
    </div>
    </div>
);
};

export default TalentSearchPage;