import "./styles.css";

const Button = (props) => {
   let {name} = props;
   return (
      <>
         <button>{name}</button>
      </>
   )
}

export default Button;