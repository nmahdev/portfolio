import SkillCard from '../components/SkillCard';

const Skills = () => {
    const technicalSkills = [
        { title: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { title: '.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
        { title: 'React.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { title: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { title: 'Tailwind CSS', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { title: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { title: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { title: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { title: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { title: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ];
    


    const knowledgeSkills = [
        { title: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { title: 'Dart', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { title: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { title: 'OOP', image: 'https://img.icons8.com/color/96/class.png' },
        { title: 'Design Patterns', image: 'https://img.icons8.com/color/96/combo-chart--v1.png' },
    ];    

    const languageSkills = [
        { title: 'English (TOEIC 715)', image: 'https://img.icons8.com/color/96/great-britain.png' },
        { title: 'Vietnamese (Native)', image: 'https://img.icons8.com/color/96/vietnam.png' },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-16">My Skills</h1>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8">
                        {technicalSkills.map((skill, index) => (
                            <SkillCard key={index} title={skill.title} image={skill.image} />
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Knowledge</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 gap-8">
                        {knowledgeSkills.map((skill, index) => (
                            <SkillCard key={index} title={skill.title} image={skill.image} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-8 text-center">Languages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {languageSkills.map((skill, index) => (
                            <SkillCard key={index} title={skill.title} image={skill.image} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
