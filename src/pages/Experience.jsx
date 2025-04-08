const Experience = () => {
    const experiences = [
        {
            title: 'Front-end Developer',
            company: 'Shop.co - E-commerce web online shopping',
            dateRange: 'Present',
            description: `Utilized Redux for managing state in CRUD operations.
                        Implemented Axios for API calls to fetch and manage data.
                        Developed a responsive design using Bootstrap and CSS.
                        Created a user-friendly interface with ReactJS and React Router for navigation.`
            ,
            githubLink: 'https://github.com/nmahdev/shop-dot-co',
            demoLink: null
        },
        {
            title: 'Front-end Developer',
            company: 'Travel Tournament Web App',
            dateRange: 'Aug 2024 - Oct 2024 ',
            description: `Designed responsive user interfaces for mobile, tablet, and desktop devices.
                        Managed web  state using useState and useEffect.
                        Implemented navigation with React Router DOM.
                        Utilized Bootstrap v5 for building visually appealing and user-friendly interfaces.`,
            githubLink: 'https://github.com/nmahdev/travel_web_app',
            demoLink: null
        },
        {
            title: 'Mobile Developer Intern',
            company: 'TMA Solutions',
            dateRange: 'Aug 2024 - Oct 2024',
            description: `Integrated AI and camera functionality for face detection and tracking.
                        Optimized application performance and state management using Cubit.
                        Developed multilingual support to enhance user experience.
                        Implemented RESTful API integration to communicate with the backend.
                        Designed a responsive UI for mobile and tablet devices.
                        Collaborated with UI/UX designers to enhance the overall design.`,
            githubLink: null,
            demoLink: null
        },
        {
            title: 'Flutter Developer',
            company: 'Task Manager App',
            dateRange: 'Jun 2024 - Jul 2024',
            description: `Integrated SQLite for local data storage to manage tasks efficiently.
                        Implemented local notifications for reminders.
                        Optimized application performance and state management using Riverpod.`,
            githubLink: 'https://github.com/nmah2408/task_manager_app',
            demoLink: null
        },
        {
            title: 'Flutter Developer',
            company: 'SPhone - Online shopping app',
            dateRange: 'Feb 2024 - May 2024',
            description: `Developed user authentication with Firebase (Email login & token refresh).
                        Designed and implemented a scalable and maintainable architecture using BloC.
                        Integrated third-party libraries for seamless API communication.
                        Designed responsive UI for a smooth cross-platform experience.`,
            githubLink: 'https://github.com/nmah2408/phone-ecommerce-app',
            demoLink: null
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">My Experience</h1>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 flex flex-col sm:flex-row gap-4">
                            {/* Date on the left */}
                            <div className="sm:w-1/4">
                                <div className="sticky top-4 bg-blue-100 text-blue-800 rounded-lg px-4 py-3 font-medium text-center sm:text-left">
                                    {exp.dateRange}
                                </div>
                            </div>

                            {/* Content on the right */}
                            <div className="sm:w-3/4 bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                                <h4 className="text-md font-semibold text-blue-600 mb-3">{exp.company}</h4>
                                <ul className="list-disc list-inside text-gray-700 mb-4">
                                    {exp.description
                                        .split('.')
                                        .map(sentence => sentence.trim())
                                        .filter(sentence => sentence.length > 0)
                                        .map((sentence, idx) => (
                                            <li key={idx}>{sentence}.</li>
                                        ))}
                                </ul>

                                {/* Links Section */}
                                {(exp.githubLink || exp.demoLink) && (
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {exp.githubLink && (
                                            <a
                                                href={exp.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                            >
                                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Source
                                            </a>
                                        )}
                                        {exp.demoLink && (
                                            <a
                                                href={exp.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;