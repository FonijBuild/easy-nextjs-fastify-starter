import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	cacheComponents: true,
	partialPrefetching: true,
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
	allowedDevOrigins: ["127.0.0.1"],
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${
					process.env.API_INTERNAL_URL ?? "http://localhost:4000"
				}/:path*`,
			},
		];
	},
};

export default nextConfig;
