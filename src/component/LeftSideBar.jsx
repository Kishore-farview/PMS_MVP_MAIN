import React, { useState, } from 'react';
import { Home, Users, Bed, Settings, Wallet, User, LogOut, Cog } from 'lucide-react';
import NaviLogo from '../assets/NaviLogo.svg';

const NaviSidebar = () => {
    const [active, setActive] = useState('Dashboard');
    const menuItems = [
        { name: 'Dashboard', icon: Home },
        { name: 'Reservations', icon: Users },
        { name: 'House Keeping', icon: Bed },
        { name: 'Setup/Manage', icon: Settings },
        { name: 'Accounting', icon: Wallet },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#005C84] via-[#4A6FA5] to-[#4A2C82] text-white flex flex-col navi-sidebar">
            {/* Logo Section */}
            <div className="pt-8 px-4">
                <img src={NaviLogo} alt="Logo" className="w-30 h-25 mx-auto" />
            </div>


            {/* Menu Items */}
            <div className="flex-1 px-3 lg:px-4 space-y-2">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = active === item.name;

                    return (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={`
                                w-full flex flex-col items-center justify-center
                                px-3 py-4 rounded-lg
                                transition-all duration-300 ease-in-out
                                group hover:bg-white/10 hover:scale-105
                                ${isActive
                                    ? 'bg-white/20 border border-white/30 shadow-lg'
                                    : 'border border-transparent hover:border-white/20'
                                }
                                ${index === 0 ? 'mt-4' : ''}
                            `}
                        >
                            <IconComponent
                                size={22}
                                className={`
                                            mb-1
                                            ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}
                                            transition-colors duration-200
                                        `}
                            />
                            <span className={`
                                            text-[10px] sm:text-xs font-medium text-center
                                            ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}
                                            transition-colors duration-200
                                        `}>
                                {item.name}
                                
                            </span>
                        </button>

                    );
                })}
            </div>


            {/* Bottom Action Buttons */}
            <div className="px-3 lg:px-4 pb-6">
                <div className="flex items-center justify-center lg:justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110">
                        <Cog size={18} className="text-white/80 hover:text-white" />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110 hidden lg:block">
                        <User size={18} className="text-white/80 hover:text-white" />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110">
                        <LogOut size={18} className="text-white/80 hover:text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NaviSidebar;