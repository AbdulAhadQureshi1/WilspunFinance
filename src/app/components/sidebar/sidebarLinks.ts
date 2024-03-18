import { SVGProps } from "react";
import { HiOutlineCubeTransparent, HiViewGrid, HiCurrencyDollar } from "react-icons/hi";
import { ChartPieIcon, CreditCardIcon, CurrencyDollarIcon, DocumentTextIcon, HomeIcon, Square2StackIcon, Squares2X2Icon } from "@heroicons/react/20/solid";

interface subLink {
  text: string;
  url: string;
}
interface link {
  text: string;
  url: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  isDropdown: boolean;
  children?: Array<subLink>;
}

const sidebarLinks: Array<link> = [
  {
    text: "Home",
    isDropdown: false,
    url: "/",
    icon:  HomeIcon,
  },
  {
    text: "Inventory",
    isDropdown: true,
    url: "#",
    icon: Squares2X2Icon,
    children: [
      {
        text: "Item Management",
        url: "/items",
      },
      {
        text: "Banking Management",
        url: "#",
      },
      {
        text: "Warehouse Management",
        url: "#",
      },
      {
        text: "Transfer Order",
        url: "#",
      },
      {
        text: "Inventory Adjustment",
        url: "#",
      },
    ],
  },
  {
    text: "Sales",
    url: "#",
    icon: CurrencyDollarIcon,
    isDropdown: true,
    children: [
      {
        text: "Customers",
        url: "/sales/customers",
      }
    ]
  },
  {
    text: "Purchase",
    url: "#",
    icon: CreditCardIcon,
    isDropdown: true,
  },
  {
    text: "Accountant",
    url: "#",
    icon: ChartPieIcon,
    isDropdown: true,
  },
  {
    text: "Reports",
    url: "#",
    icon: DocumentTextIcon,
    isDropdown: true,
  },
];

export default sidebarLinks;
