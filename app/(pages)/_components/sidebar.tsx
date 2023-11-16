import SidebarItem from './sidebar-item';

function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col">
      <SidebarItem title="Notes" link="/dashboard" />
      <SidebarItem title="Reminders" link="/dashboard/reminders" />
    </div>
  );
}

export default Sidebar;
