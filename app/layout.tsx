export const metadata = {
  title: 'Pillaar | Design Gravestones & Headstones in 3D',
  description: 'Design your memorial in beautiful 3D, compare quotes from verified local stonemasons, and commission with complete peace of mind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
