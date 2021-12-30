const Input = ({ label, id, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
};

export default Input;
