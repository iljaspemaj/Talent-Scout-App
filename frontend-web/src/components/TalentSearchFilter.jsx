import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TalentSearchFilter = ({ onFilterChange, selectedFilters }) => {
  const skillsOptions = [
    { id: "ReactJS", label: "ReactJS" },
    { id: "NodeJS", label: "NodeJS" },
    { id: "Python", label: "Python" },
    { id: "Java", label: "Java" },
  ];

  const availabilityOptions = [
    { id: "Available Now", label: "Available Now" },
    { id: "Part-Time Only", label: "Part-Time Only" },
    { id: "Full-Time Only", label: "Full-Time Only" },
  ];

  const experienceOptions = [
    { id: "Beginner", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Advanced", label: "Advanced" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>
      
      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-700">Skills</h3>
        <div className="space-y-2">
          {skillsOptions.map((skill) => (
            <div key={skill.id} className="flex items-center gap-3">
              <Checkbox 
                id={`skill-${skill.id}`} 
                checked={selectedFilters.skills.includes(skill.id)}
                onCheckedChange={() => onFilterChange('skills', skill.id)}
              />
              <Label htmlFor={`skill-${skill.id}`} className="text-gray-700 cursor-pointer">
                {skill.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Availability Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-700">Availability</h3>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-3">
              <Checkbox 
                id={`availability-${option.id}`} 
                checked={selectedFilters.availability.includes(option.id)}
                onCheckedChange={() => onFilterChange('availability', option.id)}
              />
              <Label htmlFor={`availability-${option.id}`} className="text-gray-700 cursor-pointer">
                {option.label}
            </Label>
            </div>
        ))}
        </div>
    </div>

      {/* Experience Level Section */}
    <div className="mb-4">
        <h3 className="font-medium mb-3 text-gray-700">Experience Level</h3>
        <div className="space-y-2">
        {experienceOptions.map((level) => (
            <div key={level.id} className="flex items-center gap-3">
            <Checkbox 
                id={`experience-${level.id}`} 
                checked={selectedFilters.experience.includes(level.id)}
                onCheckedChange={() => onFilterChange('experience', level.id)}
            />
            <Label htmlFor={`experience-${level.id}`} className="text-gray-700 cursor-pointer">
                {level.label}
            </Label>
            </div>
        ))}
        </div>
    </div>
    </div>
);
};

export default TalentSearchFilter;