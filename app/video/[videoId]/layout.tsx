export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 flex justify-center">
      {children}
    </div>
  );
}
