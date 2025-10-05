"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  Settings2,
  LayoutDashboard,
  BookOpenText,
  UserCog,
  Users,
  CreditCard,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/admin/NavMain"
import { NavUser } from "@/components/admin/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import SidebarBrand from "./SidebarBrand"

// This is sample data.
const data = {
  user: {
    name: "CPS Academy",
    email: "smm@cpsacademy.io",
    avatar: "/avatars/cps-academy.jpg",
  },
  sidebarBrand: [
    {
      name: "CPS Academy",
      logo: GalleryVerticalEnd,
      plan: "Academy",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Recent Activities",
          url: "#",
        },
        {
          title: "Platform Stats",
          url: "#",
        },
      ],
    },
    {
      title: "Courses",
      url: "#",
      icon: BookOpenText,
      items: [
        {
          title: "All Courses",
          url: "#",
        },
        {
          title: "Create New Course",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Modules & Lessons",
          url: "#",
        },
        {
          title: "Course Reviews",
          url: "#",
        },
      ],
    },
    {
      title: "Instructors",
      url: "#",
      icon: UserCog,
      items: [
        {
          title: "All Instructors",
          url: "#",
        },
        {
          title: "Add Instructor",
          url: "#",
        },
      ],
    },
    {
      title: "Students",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Students",
          url: "#",
        },
        {
          title: "Enrollment List",
          url: "#",
        },
        {
          title: "Feedback & Reports",
          url: "#"
        }
      ],
    },
    {
      title: "Orders & Payments",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Refund Requests",
          url: "#",
        },
        {
          title: "Coupons & Discounts",
          url: "#"
        }
      ],
    },
    {
      title: "Content Management",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Blog / Articles",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
        {
          title: "Testimonials",
          url: "#"
        },
        {
          title: "FAQs",
          url: "#"
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Roles & Permissions",
          url: "#",
        },
      ],
    },
  ],
}

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarBrand />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
