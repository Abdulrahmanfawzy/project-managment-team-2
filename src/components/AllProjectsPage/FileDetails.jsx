import { FaFilePdf } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";


export default function FileDetails({title, name, size, date}){
    return(
        <div className="flex items-center bg-white justify-center gap-10 rounded-xl border-1 border-gray-400 py-2">
            <FaFilePdf size={40} className="text-red-700" />
            <div className="text-black flex flex-col gap-1">
                <p className="font-medium">{title}</p>
                <p>By {name}</p>
                <div className="flex items-center">
                    <p>{size}</p>
                    <TbPointFilled  className="ml-2" size={15} />
                    <p>{date}</p>
                </div>
            </div>
            <BsDownload className="cursor-pointer text-black" />
        </div>
    )
}