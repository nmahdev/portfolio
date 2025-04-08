const About = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

                    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                        <div className="md:w-1/3">
                            <img
                                src="./images/avatar.jpg"
                                alt="Profile"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold mb-4">Nguyen Manh</h2>
                            <h3 className="text-xl text-blue-600 mb-4">Software Engineer / Frontend Developer</h3>
                            <p className="text-gray-700 mb-6">
                                Final-year student currently in a graduation internship. Experienced in ReactJS, HTML, CSS through school web projects. Strong foundation in OOP, Design Patterns, and web performance optimization. Currently focusing on enhancing ReactJS and C# skills. Aspiring to become a Senior Software Engineer or Team Lead within 3 years.
                            </p>

                            <div className="flex space-x-6 mb-6">
                                <a href="https://www.facebook.com/nmah2408" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/nmah2408/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500 transition">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.88-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.988.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.88.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.88.344-1.857.047-1.054.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.88-.3-1.857-.344-1.053-.047-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/nguyen-manh-6518202b1/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600 transition">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/nmahdev" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                                                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                                                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                                                -.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 
                                                1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 
                                                3.495.997.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                                                0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
                                                0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 
                                                2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23 
                                                .655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 
                                                0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 
                                                0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 
                                                22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium text-gray-600">Email:</p>
                                <a href="mailto:nguyenmanh.developer@gmail.com" className="text-blue-600 hover:underline">
                                    nguyenmanh.developer@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600">Location:</p>
                                <p>Ho Chi Minh city, Vietnam</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
