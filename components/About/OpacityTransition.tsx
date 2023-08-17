import { motion, AnimatePresence } from "framer-motion";

type OpacityTransitionProps = {
    children: JSX.Element
}

const OpacityTransition = ({ children }: OpacityTransitionProps) => {
    return (
        <AnimatePresence>
            <motion.div
                key='opacityTransition'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export default OpacityTransition;