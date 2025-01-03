import { motion } from 'framer-motion';

const NavLink = ({ href, children, icon: Icon }) => (
  <motion.a
    href={href}
    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors text-gray-700 hover:text-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </motion.a>
);

export default NavLink;