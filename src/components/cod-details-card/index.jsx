const DetailsCard = ({ icon, title, orders, numbers, iconColor }) => {
	const bgColors = {
		primary: "bg-primary/20",
		secondary: "bg-secondary/20",
		success: "bg-success/20",
	};

	return (
		<div className="w-[343px] rounded-tr-[50px] shadow-card  rounded-tl-xl rounded-bl-xl rounded-br-xl p-4 bg-white space-y-6">
			<div className="w-full flex flex-col gap-2">
				<div className={`w-22 h-22 w-fit rounded-full p-1 ${bgColors[iconColor]}`}>{icon}</div>

				<span className="text-base text-[#565656] flex items-center gap-1">
					{title}
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25ZM9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
							fill="#DCDCDC"
						/>
					</svg>
				</span>
				<h2 className="mt-1 text-2xl font-bold">{numbers}</h2>
			</div>
			<div className="border-t border-[#DCDCDC] flex justify-between items-end pt-3">
				<p className="text-sm">{orders} Orders</p>
				<p className="text-primary text-xs cursor-pointer">
					See orders
					<svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</p>
			</div>
		</div>
	);
};

export default DetailsCard;
