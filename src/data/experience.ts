export interface Role {
  title: string;
  organization: string;
  /** 2–3 letter monogram shown in the square tile beside the role. */
  mark: string;
  /** Human-readable range, most recent role first in the array. */
  period: string;
  description: string;
}

export const experience: Role[] = [
  {
    title: 'Data Science Intern',
    organization: 'The Coca-Cola Company',
    mark: 'KO',
    period: 'Summer 2026',
    description:
      'Built AI tools for the Global Data Science & ML team: an Azure OpenAI pipeline that pre-reviews sustainability compliance documents, and an evaluation harness measuring accuracy, consistency, and hallucination rate for an agentic finance-insights system.',
  },
  {
    title: 'Student Consultant',
    organization: 'Federal Reserve Bank of Atlanta',
    mark: 'FRB',
    period: 'Jan–Apr 2026',
    description:
      'Built an AI agent prototype demonstrating autonomous decision-making to ground policy recommendations in practice.',
  },
];
