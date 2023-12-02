export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-1600">{children}</div>
    </div>
  );
}
