import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/components/ui/avatar"

function Avatars({className}:{className?:string}) {
    return (
        <AvatarGroup className={`grayscale ${className}`}>
        <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar className="w-6 h-6">
            <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        </AvatarGroup>
    )
}

export default Avatars