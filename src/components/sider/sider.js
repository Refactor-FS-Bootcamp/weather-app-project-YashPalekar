import Button from "../button/button";
import "./styles.css";

const Sider = () => {

   // function setActive(element) {
   //    document.querySelectorAll('.items').forEach(e => e.classList.remove('active'));
   //    document.getElementsByClassName(element)[0].classList.add('active');
   // }

//    onClick={() => {setActive('home')}}
// onClick={() => {setActive('cities')}}

   return (
      <div className="sider">
         <div  className="items home active">Home</div>
         <div  className="items cities">Cities</div>
      </div>
   );
}

export default Sider;