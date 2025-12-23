"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Gavel,
  Building2,
  Scale,
} from "lucide-react";

const tabData = [
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    title: "Students",
    subtitle: "Moot Court Preparation",
    description:
      "Research cases, find relevant precedents, and build compelling arguments for moot court competitions.",
    tasks: [
      "Find landmark judgments",
      "Analyze case law patterns",
      "Build argument structures",
      "Practice legal reasoning",
    ],
  },
  {
    id: "senior-lawyers",
    label: "Senior Lawyers",
    icon: Briefcase,
    title: "Senior Lawyers",
    subtitle: "Strategic Case Analysis",
    description:
      "Leverage AI to uncover insights, analyze opposing counsel, and refine strategies.",
    tasks: [
      "Identify key precedents",
      "Analyze case strategy",
      "Predict case outcomes",
      "Draft compelling briefs",
    ],
  },
  {
    id: "junior-lawyers",
    label: "Junior Lawyers",
    icon: Scale,
    title: "Junior Lawyers",
    subtitle: "Efficient Legal Research",
    description:
      "Summarize documents, research cases, and draft legal memorandums efficiently.",
    tasks: [
      "Conduct case research",
      "Summarize documents",
      "Draft legal memos",
      "Prepare case briefs",
    ],
  },
  {
    id: "judges",
    label: "Judges",
    icon: Gavel,
    title: "Judges",
    subtitle: "In-depth Case Review",
    description:
      "Review case files, identify legal issues, and access relevant precedents.",
    tasks: [
      "Review case files",
      "Identify legal issues",
      "Access case law",
      "Formulate judgments",
    ],
  },
  {
    id: "corporate",
    label: "Corporate Legal Teams",
    icon: Building2,
    title: "Corporate Legal Teams",
    subtitle: "Risk Management",
    description:
      "Monitor regulations, assess risk, and manage compliance across teams.",
    tasks: [
      "Monitor regulations",
      "Assess risks",
      "Ensure compliance",
      "Manage contracts",
    ],
  },
];

export default function TabbedComponent() {
  const TASK_DURATION = 2000;
  const TAB_END_PAUSE = 200;
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [progress, setProgress] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);

  const taskVariants: Variants = {
    initial: {
      opacity: 0,
      y: "150%",
    },
    animate: {
      opacity: 1,
      y: "-30%",
      transition: {
        y: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.4,
          delay: 0.15,
        },
      },
    },
    exit: {
      y: "-150%",
      opacity: 0,
      transition: {
        y: {
          duration: 1.1,
          ease: [0.4, 0, 0.2, 1],
        },
        opacity: {
          duration: 0.5,
          delay: 0.45,
        },
      },
    },
  };

  useEffect(() => {
    const tasksCount =
      tabData.find((t) => t.id === activeTab)?.tasks.length ?? 1;

    const TAB_DURATION = TASK_DURATION * tasksCount + TAB_END_PAUSE;
    const intervalMs = 20;
    const increment = (100 * intervalMs) / TAB_DURATION;

    let endPauseTriggered = false;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100 && !endPauseTriggered) {
          endPauseTriggered = true;

          setTimeout(() => {
            const currentIndex = tabData.findIndex((t) => t.id === activeTab);
            const nextIndex = (currentIndex + 1) % tabData.length;

            setActiveTab(tabData[nextIndex].id);
            setTaskIndex(0);
            setProgress(0);
          }, TAB_END_PAUSE);

          return 100;
        }

        if (p < 100) {
          return p + increment;
        }

        return p;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    const tasks = tabData.find((t) => t.id === activeTab)?.tasks ?? [];

    const interval = setInterval(() => {
      setTaskIndex((i) => (i + 1) % tasks.length);
    }, TASK_DURATION);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="use-cases" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Legal Professionals Use Paraplex
          </h2>
          <p className="mx-auto max-w-175 text-muted-foreground md:text-xl">
            Tailored solutions for every role in the legal profession
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Legal professional use cases"
          className="flex justify-center mb-12 gap-2 flex-wrap"
        >
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setProgress(0);
                  setTaskIndex(0);
                }}
                className="
    relative overflow-hidden rounded-xl
    border border-foreground/10
    bg-secondary px-5 py-2.5
    text-sm font-medium
    text-secondary-foreground
    transition
    hover:bg-muted
  "
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                )}

                <span
                  className="
        relative z-10 flex items-center gap-2
        text-white mix-blend-difference
        pointer-events-none
      "
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {tabData.map(
              (tab) =>
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    role="tabpanel"
                    id={`panel-${tab.id}`}
                    aria-labelledby={`tab-${tab.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <div className="mx-auto max-w-5xl rounded-3xl border border-foreground/10 border-b-0 shadow-xl dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                      <div className="grid lg:grid-cols-2 h-full">
                        <div className="h-full flex flex-col justify-center space-y-4 px-6 md:px-10 lg:px-14 bg-muted rounded-l-3xl">
                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-secondary-foreground">
                            <tab.icon className="h-7 w-7" />
                          </div>
                          <h3 className="text-3xl font-bold">{tab.title}</h3>
                          <p className="text-muted-foreground text-lg">
                            {tab.description}
                          </p>
                        </div>

                        <div
                          className="
    relative h-70 md:h-80
    flex items-center justify-center
    rounded-r-3xl overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#eef4ff_100%)] dark:bg-[linear-gradient(180deg,#0b1220_0%,#0a1833_100%)]
  "
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={tab.tasks[taskIndex]}
                              variants={taskVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="
    flex items-center gap-4
    border border-foreground/10
    bg-background
    px-5 py-4 rounded-xl
    shadow-md
  "
                            >
                              <span
                                className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        bg-primary
        text-primary-foreground
        text-sm
      "
                              >
                                {taskIndex + 1}
                              </span>

                              <span className="font-medium text-foreground w-full">
                                {tab.tasks[taskIndex]}
                              </span>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
