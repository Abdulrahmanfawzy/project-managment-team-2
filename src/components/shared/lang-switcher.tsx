import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default  function LangSwitcher() {
  return (
    <Select>
      <SelectTrigger className="max-w-48 p-6 px-4 rounded-2xl cursor-pointer text-md! font-semibold!  data-[state=open]:text-md!   data-[state=open]:font-semibold! data-[placeholder]:text-md! data-[placeholder]:font-semibold! [&_svg]:text-mainText! [&_svg]:w-4!">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent className="relative z-150">
        <SelectGroup>
          <SelectItem value="grapes" className="capitalize cursor-pointer">
            English
          </SelectItem>
          <SelectItem value="pineapple" className="capitalize cursor-pointer">
            Arabic
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
