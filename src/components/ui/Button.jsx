import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export const Button = ({ children, variant = 'primary', size = 'default', className, ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600 shadow-elevated',
    secondary: 'bg-charcoal text-white hover:bg-aluminumGray border border-gray-700',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-10 py-4 text-lg',
    small: 'px-4 py-2 text-sm'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-lg font-semibold transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
