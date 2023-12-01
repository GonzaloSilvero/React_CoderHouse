interface NavBarLinkProps {
    href: string;
    text: string;
}

export const NavLink = ({href, text}: NavBarLinkProps) => {
  return (
    <a 
        href={href}
        className='text-white text-lg uppercase font-semibold hover:text-orange-900'
    >
        {text}
    </a>
  )
}
