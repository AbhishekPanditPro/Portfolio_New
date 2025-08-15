export default function Section({ id, title, bgColor, children }) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bgColor }}
      className="h-screen items-center justify-center text-4xl"
    >
      {/* {title} */}
      <div>
        {children}
      </div>
    </section>
  );
}