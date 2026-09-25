export default function Container({ children, className = "", narrow = false }) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-10 ${
        narrow ? "max-w-[1180px]" : "max-w-[1400px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
