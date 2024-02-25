import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { GrMenu } from "react-icons/gr";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-3 fixed right-0 ">
      <Menubar >
        <MenubarMenu>
          <MenubarTrigger>
            <GrMenu className="hover:cursor-pointer text-3xl"/>
          </MenubarTrigger>
          <MenubarContent className="bg-slate-500 border-none">
            <MenubarItem>
              <Link to="/">Home</Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/about">Sobre Mim</Link>
            </MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
