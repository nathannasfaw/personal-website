export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Omit when there is no repo to link; the button is then hidden. */
  github?: string;
  /** Omit when there is no live demo; the button is then hidden. */
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Autonomous Pantry',
    description:
      'An AI kitchen assistant that scans your pantry with computer vision, suggests recipes from what you already have, and builds your grocery cart automatically, but never checks out without your approval. Built for a FinTech capstone exploring how autonomous agents should handle real money.',
    tags: ['FastAPI', 'React', 'Computer Vision', 'Agentic AI'],
    github: 'https://github.com/nathannasfaw/autonomous-pantry',
  },
  {
    title: 'SEC Filing Analyst',
    description:
      'A generative AI tool that answers plain-English questions about public companies by retrieving the relevant 10-K and 10-Q filings and using Claude to give grounded, source-based answers. Runs serverless on AWS.',
    tags: ['AWS Lambda', 'Amazon Bedrock', 'Claude', 'Python'],
    github: 'https://github.com/nathannasfaw/genai-mlt-partner-bot',
  },
  {
    title: 'AI Running Coach',
    description:
      'A personal training assistant that groups your runs by type, forecasts performance with an LSTM model, and turns the numbers into coaching feedback you can actually use.',
    tags: ['TensorFlow', 'LSTM', 'K-Means', 'Gemini API', 'Streamlit'],
    github: 'https://github.com/nathannasfaw/running-plan-builder',
  },
];
