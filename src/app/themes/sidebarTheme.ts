const customSidebarTheme = {
  root: {
    base: "h-screen relative",
    collapsed: {
      on: "w-16",
      off: "w-72"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-primary py-8 px-3 text-white"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-gray-100 hover:bg-opacity-15",
    icon: {
      base: "h-6 w-6 hover:text-white transition duration-75 group-hover:text-white",
      open: {
        off: "",
        on: "text-white"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition ease-in-out delay-0",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-0 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg px-2 py-4 cursor-pointer absolute bottom-10 w-11/12 text-white flex gap-3 hover:bg-gray-100 hover:text-gray-900 duration-75",
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-gray-100 hover:bg-opacity-15",
    active: "bg-white text-gray-900",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "px-3 flex-1 whitespace-nowrap"
    },
    icon: {
      base: "h-6 w-6 hover:text-white transition duration-75 group-hover:text-white",
      active: "text-gray-900"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-3 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-8 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
}

export default customSidebarTheme
