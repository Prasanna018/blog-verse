import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, PenSquare, LogIn, UserPlus, User } from 'lucide-react';
import NavLink from './ui/NavLink';
import ProfileCard from './ui/ProfileCard';
import useAuthUser from '../hook/useAuthUser';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authUser, authJwt } = useAuthUser()
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
  );
  const Auth = authUser && authJwt;
  const navItems = [
    { href: `${Auth ? '/create-post' : '/login'}`, icon: PenSquare, label: 'Create Blog' },

    !Auth ? { href: '/login', icon: LogIn, label: 'Login' } : "",
    !Auth ? { href: '/signup', icon: UserPlus, label: 'Sign Up' } : ""

  ];



  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 backdrop-blur-lg border-b border-gray-200/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to='/'>BlogVerse</Link>
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink href={item.href} icon={item.icon}>
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            <ProfileButton onClick={handleProfileClick} showProfile={showProfile} />
          </div>

          {/* Mobile Menu Button and Profile Button */}
          <div className="md:hidden flex items-center gap-2">
            <ProfileButton onClick={handleProfileClick} showProfile={showProfile} />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/80 backdrop-blur-lg rounded-b-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <NavLink key={index} href={item.href} icon={item.icon}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Profile Card */}
        <AnimatePresence>
          {showProfile && (
            <div className="absolute right-4 w-full md:w-auto">
              {Auth ? (<ProfileCard onClose={() => setShowProfile(false)} />) : ""}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Extracted ProfileButton component for reusability
const ProfileButton = ({ onClick, showProfile }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`p - 2 rounded - full transition - colors ${showProfile ? 'bg-primary/10' : 'hover:bg-primary/10'
      } `}
  >
    <User className="w-5 h-5 text-gray-700" />
  </motion.button>
);

export default Navbar;