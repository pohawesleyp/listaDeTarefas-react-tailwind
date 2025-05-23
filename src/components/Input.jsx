function Input(props) {
  return (
    <input
      type={props.title}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-500 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
