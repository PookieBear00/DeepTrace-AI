import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function MeetOurTeam() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <TeamMember 
          name="ADITYA UPADHYAY" 
          role="Full Stack Developer" 
        />
        <TeamMember 
          name="SARAH ROSHNI NELSON" 
          role="Designer" 
        />
        <TeamMember 
          name="ISWARYA S" 
          role="Designer"
        />
        <TeamMember 
          name="ANIKETH DEB" 
          role="Developer" 
        />
        <TeamMember 
          name="HARSH SINGH " 
          role="Developer" 
        />
        <TeamMember 
          name="NAVANEET ROY" 
          role="Developer" 
        />
      </div>
    </div>
  );
}

function TeamMember({ name, role, linkedin, github }) {
  return (
    <div className="group relative flex flex-col items-center text-center bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 w-64 lg:w-72 mx-auto">
      
      
      {/* Name & Role */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{role}</p>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );
}
