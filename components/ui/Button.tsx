type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-9 py-4 text-sm font-semibold tracking-wide transition-all duration-300

      ${
        variant === "primary"
          ? "bg-[#243B63] text-white hover:-translate-y-1 hover:shadow-xl"
          : "border border-[#243B63] text-[#243B63] hover:bg-[#243B63] hover:text-white hover:-translate-y-1"
      }`}
    >
      {children}
    </button>
  );
}