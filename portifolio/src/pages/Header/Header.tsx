import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

    return (
    <div className="p-3 fixed right-0 ">
      <Menubar className="border-none text-white shadow-2xl">
        <MenubarMenu>
          <MenubarTrigger onClick={toggleMenu}>
            {openMenu ?<GrClose className="hover:cursor-pointer text-3xl"/> : <GrMenu className="hover:cursor-pointer text-3xl"/>}
          </MenubarTrigger>
          <MenubarContent className="bg-zinc-950 border-none">
            <MenubarItem >
              <Link to="/" className="text-white hover:text-black">Home</Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/about" className="text-white hover:text-black">Sobre Mim</Link>
            </MenubarItem>
            <MenubarItem className="text-white hover:text-black">Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
