import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="min-h-screen w-80 bg-blue-700">
      <MenuList list={menus} />
    </div>
  );
}
