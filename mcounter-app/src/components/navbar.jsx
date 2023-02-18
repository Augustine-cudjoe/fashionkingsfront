import React  from 'react';
/*class NavBar extends Component {
   
    render() { 
        return (
        <nav className="navbar bg-light">
        
          <a className="navbar-brand" href="#">
            Navbar <span className="nadge badge-pill badge-secondary">
                {this.props.totalCounters}</span>
            </a>
    
      </nav>);
    }
}
 
export default NavBar;
*/
//stateless functional component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-light">
        
          <a className="navbar-brand" href="#">
            Navbar <span className="nadge badge-pill badge-secondary">
                {totalCounters}</span>
            </a>
    
      </nav>);
}
export default NavBar;