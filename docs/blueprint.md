# **App Name**: PlanWise AI

## Core Features:

- Plan Input Form: PlanForm component to input planning topic, tasks, available time, duration, and optional goals.
- Plan Generation: Generates a motivational, well-structured plan based on the input parameters, using the OpenAI GPT-3.5 API, via the chat completion endpoint using the `NEXT_PUBLIC_OPENAI_API_KEY` from `.env.local` and a 'tool' will incorporate any relevant information.
- Loading Spinner: A loading spinner indicates plan generation in progress.
- Plan Display: PlanDisplay component to display the returned plan in a structured format using emojis (📅 for days, ☀️ for morning, 🌤️ for afternoon, 🌙 for evening, ⏰ for time, 💡 for tips).
- Theme Toggle: Toggle between light and dark themes for optimal viewing experience.

## Style Guidelines:

- Primary color: A calm and reliable blue (#4A90E2), to create a feeling of organization.
- Background color: A light gray (#F0F4F8) for the light theme and a dark gray (#222930) for the dark theme.
- Accent color: A vibrant purple (#9013FE), to provide contrast and visual interest to interactive elements.
- Body and headline font: 'Inter' sans-serif for a modern, clean and neutral user interface.
- Consistent use of simple, line-based icons for UI elements and emojis within the plan display (📅, ☀️, 🌤️, 🌙, ⏰, 💡) to enhance visual communication.
- Use a clean, modern layout with a focus on readability and user-friendliness. Utilize whitespace effectively to prevent the interface from feeling cluttered.
- Use subtle transitions and animations for loading states and theme toggling, enhancing the user experience without being distracting.