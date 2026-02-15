export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:block">
      {children}
    </div>
  );
}
