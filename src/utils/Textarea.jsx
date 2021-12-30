const Textarea = ({ label, id, ...rest }) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest}></textarea>
    </div>
  );
};

export default Textarea;
