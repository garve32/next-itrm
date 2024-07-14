import { extendVariants, Navbar } from '@nextui-org/react'

export const CustomNavbar = extendVariants(Navbar, {
  variants: {
    maxWidth: {
      container: {
        wrapper: "max-w-[unset] container"
      }
    }
  },
  defaultVariants: {
    maxWidth: "container"
  }
});