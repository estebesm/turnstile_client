export const ripple = {
  methods: {
    rippleEffect(event) {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      circle.classList.add("ripple-circle");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const buttonRect = button.getBoundingClientRect();
      const xPos = event.clientX - buttonRect.left - radius;
      const yPos = event.clientY - buttonRect.top - radius;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${xPos}px`;
      circle.style.top = `${yPos}px`;
      button.appendChild(circle);

      const ripple = button.querySelector(".ripple-circle");
      if (ripple) {
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
    },
  },
};
