function Navbar() {
  return (
    <nav>
      <div className='menu-icon'>
        <i className='fa fa-bars fa-2x'></i>
      </div>
      <div className='menu'>
        <ul>
          <div className='logo'>LOGO</div>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
