import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { useRouter } from 'next/router';
import ThemeSwitcher from '../ThemeSwitcher';
import { CustomNavbar } from './CustomNavbar';
import { ItrmLogo } from './Itrmlogo'

export default function TopNav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const path = router.asPath;
  console.log(currentRoute);
  console.log(path);

  const navigationRoutes = ["ITRM", "Contact"];

  return (
    <CustomNavbar isBordered>
      <NavbarBrand className='max-w-56'>
        <Link color="foreground" href="/" size='lg'>
          <ItrmLogo />
          <p className="font-extrabold text-inherit">HINT</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {navigationRoutes.map((item) => {
          const isActive = currentRoute === '/'+item.toLowerCase() ;
          const activeColor = isActive?'default':'foreground';
          console.log('currentRoute = ' + currentRoute);
          console.log('item = ' + item);
          console.log('isActive = ' + isActive);
          return (
            <NavbarItem key={item} isActive={isActive} >
              <Link color={activeColor} href={`/${item.toLowerCase()}`} size='md' className='font-bold hover:text-primary'>
                {item}
              </Link>
            </NavbarItem>
          );
        })}
        {/* <NavbarItem>
          <Link color="foreground" href="#" size='md' className='hover:text-primary'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive='false'>
          <Link href="/itrm"  size='md'>
            ITRM
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="default" href="/about">
            About
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          {/* <ThemeSwitcher /> */}
          <Button as={Link} color="default" href="#" variant="flat" size='sm'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </CustomNavbar>
  )
}
