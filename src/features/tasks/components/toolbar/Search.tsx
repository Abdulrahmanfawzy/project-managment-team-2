import { Search } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

function SearchDemo() {
    return (
        <InputGroup className="max-w-xs rounded-3xl py-4">
        <InputGroupInput placeholder="Search..."  />
        <InputGroupAddon>
            <Search />
        </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchDemo