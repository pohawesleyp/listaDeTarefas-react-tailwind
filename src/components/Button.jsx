function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-sky-200 p-2 rounded-md text-black"
    >
      {props.children}
    </button>
  );
}

export default Button;
