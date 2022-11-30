import Button from "../button/button";
import "./styles.css";

const Header = (props) => {
   let {title} = props;
   return (
         <div className="header">
            <div>{title}</div>
            <div className="header-buttons">
               <div>
               <Button name="Add new city" />
               </div>
            </div>
         </div>
   );
}

export default Header;