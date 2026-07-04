import {
  LogOut,
  Settings,
  User,
  ShoppingBag,
  Star,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router";

import navicon from "../../assets/navicon.jpg"

const DropdownProfileMenu = ({ ...props }) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };


    return (
        <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
            <Button
            className="relative h-10 w-10 rounded-full cursor-pointer"
            variant="ghost"
            >
            <Avatar>
                <AvatarImage
                alt="user image"
                src={navicon}
                loading="lazy"
                />
                {/* <User /> */}
                <AvatarFallback>HB</AvatarFallback>
            </Avatar>
            <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel className="font-normal">
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                <AvatarImage
                    alt="@haydenbleasel"
                    src={navicon}
                    loading="lazy"
                    className="h-10 w-10"
                />
                <AvatarFallback>HB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">
                    {/* {userData?.user_metadata?.userName} */}
                    Mohamed Ali
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                    {/* {userData?.user_metadata?.email} */}
                    sdfdssdf489@gmail.com
                </p>
                {/* <Badge className="w-fit text-xs" variant="secondary">
                        Pro
                        </Badge> */}
                </div>
            </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* {userData?.user_metadata?.role == "admin" && (
            <DropdownMenuItem>
                <Link
                to="/dashboard"
                className="flex gap-1 hover:text-theme items-center"
                >
                <LayoutDashboard />
                Dashboard
                </Link>
            </DropdownMenuItem>
            )} */}
            <DropdownMenuItem>
            <Link to="" className="flex gap-1 items-center hover:text-theme">
                <User />
                View Profile
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link to="/cart" className="flex gap-1 items-center hover:text-theme">
                <ShoppingBag />
                Tasks
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link to="/wishlist" className="flex gap-1 hover:text-theme">
                <Star />
                Reports
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link to="" className="flex gap-1 hover:text-theme">
                <Settings />
                Account Settings
            </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={logoutHandler}
            variant="destructive"
            className="cursor-pointer"
            >
            <LogOut />
            Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownProfileMenu;
