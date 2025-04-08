const SkillCard = ({ image, title }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-4 flex flex-col items-center">
                <img src={image} alt={title} className="w-16 h-16 object-contain mb-4" />
                <h3 className="text-lg font-semibold text-center">{title}</h3>
            </div>
        </div>
    );
};

export default SkillCard;