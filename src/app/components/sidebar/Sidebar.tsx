'use client';
import { Sidebar } from 'flowbite-react';
import sidebarLinks from './sidebarLinks';
import customSidebarTheme from '../../themes/sidebarTheme';
import { PowerIcon } from '@heroicons/react/20/solid';

export default function SlideSidebar() {
  return (
    <Sidebar theme={customSidebarTheme} aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="/" img="/logo.svg" imgAlt="logo">
        Wilspun App.
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {
            sidebarLinks.map((link, index) => {
              if(link.isDropdown) {
                return (
                  <Sidebar.Collapse key={index} label={link.text} icon={link.icon}>
                    {
                      link.children?.map((child, index_)=>(
                        <Sidebar.Item key={index_} href={child.url}>{child.text}</Sidebar.Item>
                      ))
                    }
                  </Sidebar.Collapse>
                )
              }
            })
          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <PowerIcon className='w-6 h-6' />
        Logout
      </Sidebar.CTA>
    </Sidebar>
  );
}
