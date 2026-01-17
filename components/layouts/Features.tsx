"use client";

import {
  BookmarkCheckIcon,
  LucideMessagesSquare,
  LucideThumbsUp,
  TextSearch,
} from "lucide-react";
import FeatureSection from "../sections/FeatureSection";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col min-h-screen items-center justify-between"
    >
      <FeatureSection
        icon={TextSearch}
        title="Ask anything, anyway"
        subtitle="Semantic legal search — not keyword hunting"
        description={`Search the law the way you think, not the way databases expect. Start with a broad constitutional issue, narrow it down to a specific doctrine, challenge assumptions, or ask follow-ups - all within the same research thread

"Paraplex understands meaning, context and intent."`}
        mediaType="image"
        mediaSrc="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ZmZ0aHl5OGZ0aHl5OGZ0aHl5OGZ0aHl5OGZ0aHl5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHFRbmaZtBRhXG/giphy.gif"
        // alignRight
        italicizeLastLine
      />

      <FeatureSection
        icon={LucideMessagesSquare}
        title="Don’t just download. Talk to the judgment"
        subtitle="Turn judgments into living research material"
        description={`Access judgments not as static PDFs, but as interactive research sources.
Get structured summaries, understand judicial reasoning, trace how principles are applied.

"Judgments stop being documents. They become conversations."`}
        mediaType="image"
        mediaSrc="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ZmZ0aHl5OGZ0aHl5OGZ0aHl5OGZ0aHl5OGZ0aHl5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHFRbmaZtBRhXG/giphy.gif"
        // alignRight
        italicizeLastLine
      />

      <FeatureSection
        icon={BookmarkCheckIcon}
        title="Bookmarks that think like a lawyer"
        subtitle="Save reasoning, not just pages"
        description={`Bookmark exactly what matters — a paragraph, a line of reasoning, a dissent, or an Insight. Your bookmarks evolve into a structured research trail you can return to anytime.

"No more re-searching the same judgment. No more lost arguments."`}
        mediaType="video"
        mediaSrc="/bookmark.mp4"
        italicizeLastLine
      />

      <FeatureSection
        icon={LucideThumbsUp}
        title="Feedback-driven research"
        subtitle="Refine answers. Improve clarity. Build trust."
        description={`Every response can be reviewed, refined, and improved through direct feedback.
This keeps Paraplex aligned with real legal thinking — not generic outputs.

"Research improves as you use it."`}
        mediaType="video"
        mediaSrc="/feedback.mp4"
        // alignRight
        italicizeLastLine
      />
    </section>
  );
}
