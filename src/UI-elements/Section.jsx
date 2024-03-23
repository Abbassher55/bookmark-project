export default function Section({ children, id }) {
  return (
    <section className="container pb-12 pt-8 max-sm:px-3" id={id}>
      {children}
    </section>
  );
}
