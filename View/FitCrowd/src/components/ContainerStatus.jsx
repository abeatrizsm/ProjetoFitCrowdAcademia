import { MdCalendarMonth } from "react-icons/md";
export default function ContainerStatus({titulo, subtitulo, icone, dado}){
    return (
			<div className=" flex mt-9 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-1/3 h-36">
				<div className="flex flex-col">
					<p className="text-gray-300 pb-2">{titulo}</p>
					<h2 className="text-white font-bold text-4xl pb-2">{dado}</h2>
					<p className="text-red-600 text-xs">{subtitulo}</p>
				</div>
				<div className="ml-auto">
					<span className="text-red-600 mt-1 text-2xl ">{icone}</span>
				</div>
			</div>
		);
}