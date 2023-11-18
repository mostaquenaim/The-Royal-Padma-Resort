import { useState } from 'react';

const CustomDrawer = ({links}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div>
            <div className={`drawer z-50 lg:hidden relative ${drawerOpen ? 'open' : ''}`}>
                {/* drawer open close  */}
                <input
                    type="checkbox"
                    id="panel-toggle"
                    className="relative sr-only peer"
                    checked={drawerOpen}
                    onChange={toggleDrawer}
                // defaultChecked
                />
                {/* drawer icon  */}
                <label
                    htmlFor="panel-toggle"
                    className="fixed top-0 left-0 inline-block p-4 bg-neutral transition-all duration-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64"

                >
                    <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                    <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
                </label>
                <div
                    className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-base-100 shadow-lg peer-checked:translate-x-0"
                >
                    <div className="px-6 py-4">
                        <ul className={`menu p-4 min-h-full bg-base-200 text-base-content`} >
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomDrawer;