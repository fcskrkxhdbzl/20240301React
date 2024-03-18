import "./../styles/Header.css";

const Header = (props) => {
  return (
    <div className={props.classProps}>
      <header>
        <ul className="page-list">
          <li>this</li>
          <li>is</li>
          <li>header</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
