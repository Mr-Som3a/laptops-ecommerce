export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center items-center py-8">
      {/* <StepOfProgress/> */}
      {children}
    </main>
  );
}
