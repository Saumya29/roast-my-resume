import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sample analysis" };

export default function DemoPage() {
	return (
		<main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
			<header className="space-y-4">
				<p className="font-mono text-xs text-primary uppercase tracking-widest">
					Fictional example · No sign-in needed
				</p>
				<h1 className="text-3xl sm:text-5xl font-bold">From vague bullets to useful evidence.</h1>
				<p className="text-muted-foreground leading-relaxed">
					This is a fixed, hand-written sample showing the kind of feedback the app provides. It is
					not a live AI result or a real candidate’s resume. Your own review compares the documents
					you supply.
				</p>
			</header>
			<section className="grid md:grid-cols-2 gap-4" aria-label="Sample inputs">
				<article className="bg-surface border border-border rounded-lg p-6 space-y-3">
					<h2 className="font-bold text-lg">Resume excerpt</h2>
					<p className="text-sm text-muted-foreground">Alex Chen · Software Engineer · 4 years</p>
					<ul className="list-disc pl-5 text-sm space-y-2">
						<li>Built customer dashboards with React and TypeScript.</li>
						<li>Created Node.js APIs backed by PostgreSQL.</li>
						<li>
							Responsible for implementing React and TypeScript filters in the support dashboard.
						</li>
					</ul>
				</article>
				<article className="bg-surface border border-border rounded-lg p-6 space-y-3">
					<h2 className="font-bold text-lg">Job description excerpt</h2>
					<p className="text-sm leading-relaxed">
						AI Product Engineer: build customer-facing features with React, TypeScript and Node.js.
						Develop document retrieval, evaluate LLM outputs, and own features from design through
						deployment.
					</p>
				</article>
			</section>
			<section className="border border-border rounded-lg p-6 space-y-4">
				<h2 className="font-bold text-xl">What matches, and what needs evidence</h2>
				<p className="text-muted-foreground leading-relaxed">
					The resume demonstrates the required web stack. It does not yet show document retrieval,
					LLM evaluation or end-to-end feature ownership. Those are gaps in the written evidence;
					Alex may have relevant experience that is not included.
				</p>
				<ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed">
					<li>
						<strong>Keep the stack visible.</strong> React, TypeScript, Node.js and PostgreSQL
						already support the application.
					</li>
					<li>
						<strong>Add an AI project if one exists.</strong> Explain the retrieval approach,
						evaluation method and limitations. Do not claim experience that has not happened.
					</li>
					<li>
						<strong>Clarify ownership.</strong> Say which features you designed, implemented, tested
						and deployed. Add measured outcomes only if you can substantiate them.
					</li>
				</ol>
			</section>
			<section className="bg-surface border border-border rounded-lg p-6 space-y-3">
				<h2 className="font-bold text-xl">A grounded bullet rewrite</h2>
				<p className="text-sm text-muted-foreground">
					<strong>Before:</strong> Responsible for implementing React and TypeScript filters in the
					support dashboard.
				</p>
				<p className="text-sm">
					<strong>After:</strong> Implemented support dashboard filters with React and TypeScript.
				</p>
				<p className="text-sm text-muted-foreground">
					The rewrite replaces a responsibility phrase with a direct action and keeps the known
					technical details. A stronger version would also need a real outcome. The app should not
					invent a percentage, user count or business result to make it sound impressive.
				</p>
			</section>
			<p className="text-sm text-muted-foreground">
				An AI review is a second opinion. It cannot reveal an employer’s rejection reason, applicant
				pool or hiring decision.
			</p>
			<Link href="/analyze" className="inline-block">
				<Button size="lg">Review your resume</Button>
			</Link>
		</main>
	);
}
