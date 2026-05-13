# Apple Senior UI Developer Interview Questions & Answers

## 1. How do you design a reusable component library?

I start by identifying common UI patterns across the application, like buttons, inputs, modals, tabs, cards, tables, and form controls. Then I design each component with a clean API, strong TypeScript props, accessibility, responsive behavior, and theme support.

A reusable component should be flexible, but not overloaded. For example, a Button can support `variant`, `size`, `disabled`, `loading`, and `icon`, but it should not expose too many internal styling details.

My goal is to make components easy for other developers to use, consistent across products, and simple to maintain.

---

## 2. How do you handle inconsistent code standards?

First, I review the current codebase and identify the major issues: duplicated components, inconsistent naming, different styling approaches, missing TypeScript types, and uneven folder structures.

Then I introduce standards gradually. I would add ESLint, Prettier, TypeScript rules, shared folder conventions, reusable components, and documentation. I prefer improving high-impact areas first instead of doing a full rewrite.

The goal is to create consistency without slowing down delivery.

---

## 3. How do you structure React + TypeScript components?

I usually keep components small and focused.

### Example structure

```txt
Button/
  Button.tsx
  Button.types.ts
  Button.scss
  Button.test.tsx
  index.ts
```

### Example props

```tsx
type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};
```

I separate business logic from UI where possible, use custom hooks when logic becomes reusable, and keep components easy to test.

---

## 4. How do you make components responsive?

I design components mobile-first. I use flexible layouts like CSS Grid and Flexbox, relative units, and SCSS breakpoints.

For example, a card grid can show one column on mobile, two on tablet, and four on desktop. I also test components in different screen sizes and make sure text, spacing, and touch targets work well.

Responsive design is not just layout. It also includes readable typography, accessible spacing, and usable interactions on mobile.

---

## 5. How do you handle accessibility in UI components?

I build accessibility into the component from the beginning. I check semantic HTML, keyboard navigation, focus states, ARIA attributes where needed, color contrast, labels, and screen reader behavior.

For example, a modal should trap focus, close with Escape, restore focus after closing, and have proper `aria-labelledby` and `aria-modal`.

For form components, I make sure every input has a label, error messages are announced properly, and keyboard users can complete the flow without using a mouse.

---

## 6. What is the difference between React components and Web Components?

React components are designed for React applications. They work very well inside the React ecosystem with props, state, hooks, and React rendering.

Web Components are browser-native custom elements. They can be used across different frameworks like React, Angular, Vue, or even plain JavaScript.

So if the company has multiple teams using different frameworks, Web Components are useful because they provide framework-agnostic reusable components.

---

## 7. Why use Stencil.js?

Stencil.js helps build Web Components using a modern developer experience similar to React. It supports TypeScript, decorators, props, events, slots, and Shadow DOM.

The main benefit is that Stencil components are framework-agnostic. One component can be consumed in React, Vue, Angular, or vanilla JavaScript.

For a framework development team, Stencil is useful because it helps create a shared design system or component library that can support multiple applications.

---

## 8. How do you improve frontend performance?

I look at performance in different areas: bundle size, rendering, network requests, and user experience.

Some techniques I use are lazy loading, code splitting, memoization, avoiding unnecessary re-renders, optimizing images, debouncing search inputs, virtualizing large lists, and reducing unused JavaScript and CSS.

In React, I use `React.memo`, `useMemo`, and `useCallback` only when they solve a real problem. I also use browser DevTools, Lighthouse, and performance profiling to measure before optimizing.

---

## 9. How do you manage styling in SCSS?

I use SCSS in a structured way with variables, mixins, partials, and reusable design tokens.

For example, colors, spacing, font sizes, and breakpoints should come from shared variables instead of hardcoded values. I also prefer component-scoped styles and clear naming conventions to avoid conflicts.

I try to keep SCSS maintainable by avoiding deep nesting and keeping styles close to the component they belong to.

---

## 10. How would you build UI for an AI agent workflow?

I would design the UI around visibility, control, and trust.

The user should be able to select a task, start the agent, see real-time progress, review logs, understand what step the agent is currently running, and approve important actions when needed.

### Example UI flow

```txt
Repository selection
Task selection
Run Agent button
Live execution status
Step-by-step progress
Logs panel
Error/retry state
Final result summary
```

For real-time updates, I would use WebSockets or Server-Sent Events. I would also make sure the UI handles loading, success, failure, cancellation, and retry states clearly.

---

## 11. How do you test reusable components?

I test reusable components at multiple levels.

For unit testing, I use Jest and React Testing Library. I test rendering, props, events, disabled states, error states, and conditional UI.

For accessibility, I check keyboard behavior, labels, focus handling, and ARIA attributes. For visual consistency, Storybook or visual regression testing can help.

For example, for a Button component, I would test that it renders the correct label, calls `onClick`, respects the disabled state, supports variants, and shows loading state correctly.

---

## 12. How do you handle breaking changes in a component library?

I try to avoid breaking changes by designing component APIs carefully. But when breaking changes are needed, I handle them with versioning, migration notes, deprecation warnings, and clear documentation.

I would first mark the old prop or behavior as deprecated, provide an alternative, and give teams time to migrate. For larger changes, I would release a new major version.

The goal is to improve the library without surprising teams that depend on it.
