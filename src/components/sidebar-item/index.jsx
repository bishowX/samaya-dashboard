const SidebarItem = ({ leftIcon, classes, children, ...props }) => {
	return (
		<a href="#" className={"font-medium self-start flex justify-start items-center gap-4 px-6 py-3 outline-none border-0 rounded-[5px] " + classes} {...props}>
			{leftIcon}
			{children}
		</a>
	);
};

export default SidebarItem;
