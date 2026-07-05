import { FileText } from "lucide-react";
import { Download } from "lucide-react";

const ProjectFileCard = ({ fileName, fileCreator,fileStorage, uploadingTime }) => {
  return (
    <>
      <section className="border-1 border-mutedText rounded-lg p-3 flex justify-between items-center gap-5 flex-wrap">
        <section className="flex items-center gap-5">
          <FileText size={45} className="text-red-500" />
          <section className="space-y-2">
            <h4 className="capitalize font-semibold text-xl">{fileName}</h4>
            <p className="capitalize font-medium text-sm text-mutedText">
              by {fileCreator}
            </p>
            <p className="text-sm text-mutedText font-medium">{`${fileStorage} MB . ${uploadingTime} ago`}</p>
          </section>
        </section>
        <Download size={45} className="cursor-pointer" />
      </section>
    </>
  );
};

export default ProjectFileCard;
