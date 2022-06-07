import { sidebarData } from "../../data";
import Button from "../button";
import SidebarItem from "../sidebar-item";

const Sidebar = () => {
	return (
		<aside className="fixed top-0 py-8 left-4 h-screen max-h-[900px] flex flex-col justify-between items-center">
			<div className="w-full flex flex-col items-center gap-6">
				<img src="/images/logo.svg" alt="Company logo" />
				<div className="flex gap-4 items-center">
					<img width={28} height={28} className="w-[28px] h-[28px] rounded-full" src="/images/profile.png" alt="User avatar" />
					<span className="font-medium">Hi Merchant</span>
				</div>
				<Button
					classes="bg-primary text-white"
					leftIcon={
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.8333 5.83332H9.16663V9.16666H5.83329V10.8333H9.16663V14.1667H10.8333V10.8333H14.1666V9.16666H10.8333V5.83332ZM9.99996 1.66666C5.39996 1.66666 1.66663 5.39999 1.66663 9.99999C1.66663 14.6 5.39996 18.3333 9.99996 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99999C18.3333 5.39999 14.6 1.66666 9.99996 1.66666ZM9.99996 16.6667C6.32496 16.6667 3.33329 13.675 3.33329 9.99999C3.33329 6.32499 6.32496 3.33332 9.99996 3.33332C13.675 3.33332 16.6666 6.32499 16.6666 9.99999C16.6666 13.675 13.675 16.6667 9.99996 16.6667Z"
								fill="white"
							/>
						</svg>
					}
				>
					Crreate Order
				</Button>

				{sidebarData.map((item) => (
					<SidebarItem item={item} key={item.title} leftIcon={item.icon}>
						{item.title}
					</SidebarItem>
				))}
			</div>
			<div className="flex justify-between items-center gap-2">
				<span className="text-xs px-4 py-1 bg-primary text-white uppercase rounded-3xl">Beta</span>
				<span className="font-meddium text-primary cursor-pointer underline underline-offset-1">Give us Feedback</span>
			</div>
		</aside>
	);
};

export default Sidebar;
