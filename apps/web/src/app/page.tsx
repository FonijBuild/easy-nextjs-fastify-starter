"use client";

import { type HealthResponse, healthResponseSchema } from "@repo/shared";
import { useEffect, useState } from "react";

export default function Home() {
	const [health, setHealth] = useState<HealthResponse | null>(null);

	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function checkHealth() {
			try {
				const response = await fetch("/api/health", {
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error("API request failed");
				}

				const data = healthResponseSchema.parse(await response.json());

				setHealth(data);
			} catch {
				if (!controller.signal.aborted) {
					setError("Could not connect to the API");
				}
			}
		}

		void checkHealth();

		return () => controller.abort();
	}, []);

	return (
		<main className="p-10">
			<h1 className="text-3xl font-bold">TypeScript Monorepo</h1>

			<p className="mt-4">
				API Status:{" "}
				{error ??
					(health ? `${health.service}: ${health.status}` : "Loading...")}
			</p>
		</main>
	);
}
