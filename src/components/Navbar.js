function Navbar() {
  return (
    <nav>
      <div className='menu-icon'>
        <i className='fa fa-bars fa-2x'></i>
      </div>
      <div className='logo'>LOGO</div>
      <div className='menu'>
        <ul>
          <li>
            <a href='google.com'>Home</a>
          </li>
          <li>
            <a href='about'>About</a>
          </li>
          <li>
            <a href='google.com'>Projects</a>
          </li>
          <li>
            <a href='google.com'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
