import React from 'react';
import { useParams, Link } from 'react-router-dom';

const formatSlug = (slug) => {
    return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Breadcrumb = () => {
    const { slug } = useParams();

return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/" className="text-black text-decoration-none">Home</Link>
            </li>
            <li className={`breadcrumb-item ${slug ? '' : 'active'}`}>
                {slug ? <Link to="/shop" className="text-black text-decoration-none">Shop</Link> : 'Shop'}
            </li>
                {slug && (
            <li className="breadcrumb-item active" aria-current="page">
                {formatSlug(slug)}
            </li>
        )}
        </ol>
    </nav>
);
};

export default Breadcrumb;
