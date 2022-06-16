import {useState, useContext} from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { MenuItem, Select} from '@mui/material'
import UseDarkMode from "./useDarkMode"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CryptoState } from "../context/cryptoContext";
import Login from "./login"


const Menu = () => {

      const [colorTheme, setTheme] = UseDarkMode();
      const { currency, setCurrency } = useContext(CryptoState);
      const router = useRouter();

      return (
        <div>
          <nav className=" w-screen z-10 bg-green-100 dark:bg-gray-900 border-b-4 border-white dark:border-gray-400" style={{ position: "-webkit-sticky", position: "sticky", top: '0'}}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center px-2 h-20">
                <div className="flex- items-center">
                  <div className=" flex items-end cursor-pointer" onClick={() => router.push("/")}>
                      <h1 className="font-bold text-3xl md:text-4xl text-blue-500">C</h1>
                      <h3 className="font-semibold text-xl md:text-2xl text-blue-400"> tracker</h3>
                  </div>
                </div>
                <div className="flex">
                <SearchIcon className="md:text-4xl mr-4 h-7 cursor-pointer text-green-600 hover:text-green-800 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/search")}/>
                <NotificationsIcon className="text-4xl text-green-600 hover:text-green-800 dark:dark-color dark:hover:text-gray-400 mr-4 h-7 cursor-pointer" onClick={() => router.push("/search")}/>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  className="text-green-600 bg-white border-red-300 hover:text-green-800 dark:text-gray-800 dark:hover:text-gray-400 h-7 cursor-pointer"
                  style={{ width: 85, height: 30 }}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem> 
                  <MenuItem value={"NGN"}>NGN</MenuItem> 
                </Select>
                {colorTheme === "light"? (<LightModeIcon className="cursor-pointer text-green-600 hover:text-green-800 h-7 dark:dark-color dark:hover:text-gray-400 mx-4 " onClick={() => setTheme("light")} />) : (<DarkModeIcon className="cursor-pointer text-green-600 hover:text-green-800 dark:dark-color h-7 mx-4 dark:hover:text-gray-400" onClick={() => setTheme("dark")}/>)}
                {/* <Login /> */}
              </div>
              </div>
            </div>
          </nav>
        </div>
  )
};

export default Menu;