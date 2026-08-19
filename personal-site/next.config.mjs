/** @type {import('next').NextConfig} */
const nextConfig = {
  // 靜態匯出 → out/，供 Cloudflare Workers 靜態資產託管
  output: "export",
  // 靜態匯出無法用 Next 的圖片最佳化
  images: { unoptimized: true },
  // 產生 /about/index.html 這種結構，靜態託管的路由最穩
  trailingSlash: true,
};

export default nextConfig;
