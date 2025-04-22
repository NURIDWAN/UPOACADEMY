/*
	Installed from https://reactbits.dev/tailwind/
*/

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={gradientStyle}
        >
          <div
            className="absolute inset-[1px] bg-black rounded-[1.25rem] z-[-1]"
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-clip-text animate-gradient"
        style={gradientStyle}
      >
        {children}
      </div>
    </div>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// }