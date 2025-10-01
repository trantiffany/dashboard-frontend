## About the Project

This project was built using React, Next.js, shadcn/ui, tailwind css, and React Icons.
The entire frontend was built by yours truly @trantiffany and has been updated to remove information relating to xxxxx.

It was originally developed as part of a hackathon project, with the primary goal of improving the developer experience. Rather than jumping between multiple platforms and dashboards, this app serves as a centralized developer dashboard.

Key features include:

- Viewing pull requests you’ve created and those awaiting your review.
- Quick access to bookmarked Confluence pages, Datadog monitors & dashboards, and Jira tickets currently in progress.
- A handy timezone list to support collaboration across distributed teams.
- A built-in Pomodoro timer to help developers stay focused and on task.

## Hackathon Context

Due to hackathon constraints, we were not allowed to access production or business data directly.
As a result, the current implementation allows users to configure their own settings manually — such as adding their Jira token, GitHub username, and email.

In an ideal production-ready application, we would integrate Single Sign-On (SSO) (e.g., via Okta) to automatically pull in a user’s relevant data without requiring them to manually input tokens or other credentials.

## Future Vision

While this hackathon version focuses on developers, this platform could easily be expanded to improve the experiences of QA engineers, Product managers, and Design teams.

In a future iteration:
Cards and dashboards could adapt based on the user’s role (DEV/QA/DESIGN/PRODUCT).
Each role would see customized information and tools relevant to their workflow.
This would transform the app from a developer-only dashboard into a cross-functional team hub, streamlining collaboration across the entire product lifecycle.

# Preview

![image-4](https://github.com/user-attachments/assets/80700f5a-d00f-41cf-8f35-6365c25bb137)

![image-5](https://github.com/user-attachments/assets/b5a35842-da6a-49b6-8caa-621366331ab0)

![image-1](https://github.com/user-attachments/assets/5bff458c-dc78-461e-b62c-ce13ca2c648a)

![image-7](https://github.com/user-attachments/assets/904a731b-1efa-40e6-b8aa-5520cb8a96cf)

## Getting Started

First, run the development server:

```bash
#install your dependencies after cloning the repository
npm install
# then run your project locally via
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
NOTE: Backend is not running and is not available for the public.
