<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ManifestItem from '$lib/components/ManifestItem.svelte';
	import { manifest } from '$lib/data/manifest';
</script>

<svelte:head>
	<title>AI Manifest — Liip</title>
	<meta name="description" content="10 principles for responsible AI usage at Liip." />
</svelte:head>

<Header />

<main>
	<section class="hero">
		<div class="hero-inner">
			<h1>
				<span class="hero-bold">AI</span> Manifest
			</h1>
			<span class="hero-accent"></span>
			<p class="hero-lead">These are our shared principles for integrating AI in the Square Team. It's about intention, responsibility and a healthy dose of critical thinking.</p>
		</div>
	</section>

	<section class="manifest">
		<div class="manifest-inner">
			{#each manifest as principle (principle.number)}
				<ManifestItem {principle} />
			{/each}
		</div>
	</section>
</main>

<footer>
	<div class="footer-content">
		<p class="footer-text">Liip — Square Team — AI Manifest v1.0 — {new Date().getFullYear()}</p>
	</div>
</footer>

<style>
	footer {
		padding: var(--space-md);
		font-size: 0.875rem;
		color: var(--color-grey-500);
	}

	.footer-content {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	main {
		min-height: 100vh;
	}

	/* ---- Hero ---- */
	.hero {
		padding: var(--space-xl) var(--space-md) var(--space-lg);
	}

	.hero-inner {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.hero-label {
		font-size: var(--size-body);
		font-weight: var(--weight-regular);
		margin-bottom: var(--space-sm);
		color: var(--text-color);
	}

	h1 {
		font-size: var(--size-hero);
		font-weight: var(--weight-regular);
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.hero-bold {
		font-weight: var(--weight-black);
	}

	.hero-accent {
		display: block;
		width: 4rem;
		height: 6px;
		background: var(--highlight-color);
		margin-top: var(--space-md);
	}

	.hero-lead {
		max-width: 62rem;
		font-size: clamp(1.5rem, 2.5vw, 2.25rem);
		font-weight: var(--weight-thin);
		line-height: 1.3;
		color: var(--text-color);
		margin-top: var(--space-lg);
		padding-left: calc(5rem + var(--space-md));
	}

	@media (max-width: 640px) {
		.hero-lead {
			padding-left: calc(3rem + var(--space-sm));
		}
	}

	/* ---- Manifest list ---- */
	.manifest {
		padding: 0 var(--space-md) var(--space-lg);
	}

	.manifest-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		border-top: 1px solid var(--text-color);
	}
</style>
