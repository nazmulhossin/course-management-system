import { useSidebar } from "../ui/sidebar";

export default function SidebarBrand() {
  const { state } = useSidebar();
  console.log(state);
  return (
    <div className={`flex items-center gap-2 ${state === "collapsed" ? "p-0" : "p-2"}`}>
      <div className="size-8 bg-sidebar-primary text-white aspect-square hover:bg-primary/90 text-[1.2rem] rounded-[6px] flex justify-center items-center">C</div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">CPS Academy</span>
        <span className="truncate text-xs">Academy</span>
      </div>
    </div>
  )
}
