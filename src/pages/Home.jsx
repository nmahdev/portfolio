import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hello,
                            <br />
                            I'm <span className="text-blue-400">Nguyen Manh</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-wide">
                            Software Engineer / Frontend Developer
                        </p>
                        <p className="text-gray-300 mb-8 max-w-lg">
                            Final-year student currently in a graduation internship. Experienced in ReactJS, HTML, CSS through school web projects. Strong foundation in OOP, Design Patterns, and web performance optimization. Currently focusing on enhancing ReactJS and C# skills. Aspiring to become a Senior Software Engineer or Team Lead within 3 years.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="/about"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                            >
                                About Me
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 border border-white rounded-lg transition duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-2xl flex items-center justify-center">
                            {/* Replace with your actual profile image */}
                            <img
                                src="./images/avatar.jpg"
                                alt="Profile"
                                className="w-60 h-60 md:w-76 md:h-76 rounded-full object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;