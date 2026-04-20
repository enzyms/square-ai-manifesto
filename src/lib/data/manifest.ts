export interface ManifestPrinciple {
	number: number;
	headline: { bold: string; rest: string };
	points: string[];
}

export const manifest: ManifestPrinciple[] = [
	{
		number: 1,
		headline: { bold: 'Mental health', rest: 'first' },
		points: [
			'Control the acceleration, do not endure it.',
			'Watch out for context switching, job intensification, AI burnout.'
		]
	},
	{
		number: 2,
		headline: { bold: 'AI is only', rest: 'a tool' },
		points: [
			"Don't lose ourselves.",
			'Be aware of fascination and hype.',
		]
	},
	{
		number: 3,
		headline: { bold: 'Play', rest: 'collective' },
		points: [
			'Talk together, design together, code together.', 
			'Help your colleague who feels left behind.', 
		]
	},
	{
		number: 4,
		headline: { bold: 'Keep it', rest: 'open' },
		points: [
			'“Open over Claude” ethics',
			'Project setup must work for everyone.']
	},
	{
		number: 5,
		headline: { bold: "Don't", rest: 'get lazy' },
		points: [
			'Keep your expertise sharp.',
			'Keep your critical point of view.',
		]
	},
	{
		number: 6,
		headline: { bold: 'Human', rest: 'in the loop' },
		points: [
			'Avoid reviews from hell.',
			'You ask your LLM, you are accountable.'
		]
	},
	{
		number: 7,
		headline: { bold: 'Sovereignty', rest: 'at the centre' },
		points: [
			'Own your data.',
			'Expose them responsibly.',
		]
	},
	{
		number: 8,
		headline: { bold: 'Security', rest: 'all around' },
		points: [
			'Give access to the necessary systems only.',
			'Treat every prompt as a potential leak.'
		]
	},
	{
		number: 9,
		headline: { bold: 'Be', rest: 'frugal' },
		points: [
			'Master your context, choose your LLM wisely.',
			'Prompt only when it makes sense.'
		]
	}
];
