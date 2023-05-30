import { useState } from "react";

const FormInput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

// we can write it lie this as well where props are not destructured

// const FormInput = (props) => {
//   return (
//     <div className="formInput">
//       {" "}
//       <label>{props.title}</label>
//       <input placeholder={props.placeholder} />
//       {/* the placeholder and title above comes from the props */}
//     </div>
//   );
// };
// export default FormInput;
