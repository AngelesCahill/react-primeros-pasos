import PropTypes from 'prop-types';

export const Nav = ({ children, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

Nav.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}


