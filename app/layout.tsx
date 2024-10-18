import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Tư vấn luật Ngọc Ánh</title>
      </head>
      <AppRouterCacheProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
