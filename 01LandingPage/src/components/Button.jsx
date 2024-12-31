function Button({ label, borderColor, bgColor , txtColor }) {
  return (
    <button
      className={`border  ${borderColor ? borderColor : "border-blue-400"} ${
        bgColor ? bgColor : "bg-white"
      }  ${txtColor ? txtColor : "text-black"}   rounded-md py-5 px-8 m-4`}
    >
      {label}
    </button>
  );
}

export default Button;