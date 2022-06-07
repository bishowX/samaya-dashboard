const Button = ({ leftIcon, classes, children, ...props }) => {
	return (
		<button className={"font-medium h-fit flex justify-start items-center gap-1 px-6 py-3 outline-none border-0 rounded-[5px] " + classes} {...props}>
			{leftIcon}
			{children}
		</button>
	);
};

export default Button;
