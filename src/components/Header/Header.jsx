
const Header = ({name, color}) => {
    return (
        <h2 className={`mt-10 text-xl md:text-2xl lg:text-6xl font-luxurious font-semibold mb-8 text-center ${color ? 'text-primary' : 'text-base-200'}  transition-transform duration-300 transform`}>
            {name}
        </h2>
    );
};

export default Header;