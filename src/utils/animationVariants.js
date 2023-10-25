export const popOut = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      duration: 0.5,
    },
  },
};

export const fadeInY = (delay) => ({
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});
