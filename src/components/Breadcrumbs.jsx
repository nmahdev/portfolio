import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="text-gray-600 text-sm mb-16">
            <div className="flex flex-wrap items-center justify-center gap-1">
                <Link to="/" className="hover:underline">Home</Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <span key={to} className="flex items-center gap-1">
                            <span>/</span>
                            {isLast ? (
                                <span className="font-medium text-gray-900">{value}</span>
                            ) : (
                                <Link to={to} className="hover:underline capitalize">
                                    {value}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
