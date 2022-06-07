const AnnouncementCard = () => {
	return (
		<div className="w-full flex gap-4  bg-white">
			<div className="w-[92px] h-full py-3 bg-[#DEEED1] rounded-l-md flex flex-col justify-center items-center">
				<h3 className="text-[#2E6C00] font-bold text-[32px]">25</h3>
				<span className="block text-[#2E6C00] font-medium text-base">May</span>
				<span className="block text-[#2E6C00] font-medium text-base">2022</span>
			</div>
			<div className="w-full h-full py-4">
				<h2 className="text-lg font-medium text-[#191919]">Announcement 1</h2>
				<p className="text-sm text-[#191919]">
					Dictum amet morbi sem vitae lacus mauris. Amet suspendisse a curabitur est non sed elit, tempor. Adipiscing vel mauris eu dolor, purus. Vel sit tellus tellus
					justo, eget risus, tortor senectus.Dictum amet morbi sem vitae lacus mauris. Amet suspendisse a curabitur est non sed elit, tempor. Adipiscing vel mauris eu
					dolor, purus. Vel sit tellus tellus justo, eget risus, tortor senectus.{" "}
				</p>
			</div>
		</div>
	);
};

export default AnnouncementCard;
