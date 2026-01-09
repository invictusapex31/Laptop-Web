import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600',
    secondary: 'bg-neutral text-accent hover:bg-gray-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
