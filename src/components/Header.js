import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "yellow",
};

export default Header;
