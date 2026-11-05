"use client";

import { useState } from "react";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getSituationById } from "../../data/atlas";
import { composeActivities } from "./activity-composer";
import type {
  ExecutionStructure,
  OutputForm,
  ThinkingMovement,
} from "./activity-taxonomy";

const thinkingMoves: ThinkingMovement[] = [
  "mashahede",
  "jozeinegari",
  "tosif",
  "revayat",
  "bayan_ehsas",
  "takhayol",
  "porseshgari",
  "moghayese",
  "didgah",
  "ertebatsazi",
  "dalil_entekhab",
  "bazandishi",
];

const outputForms: OutputForm[] = [
  "description",
  "list",
  "narrative",
  "letter",
  "dialogue",
  "interview",
  "monologue",
  "report",
  "analysis",
  "interpretation",
  "argument",
  "hypothesis_evidence",
  "decision_reason",
  "question_chain",
  "text_rewrite",
  "text_extension",
  "text_variants",
];

const executionStructures: ExecutionStructure[] = [
  "individual",
  "pair",
  "group",
];

const thinkingMovementLabels: Record<
  ThinkingMovement,
  { fa: string; en: string }
> = {
  mashahede: { fa: "مشاهده", en: "Observation" },
  jozeinegari: { fa: "جزئی‌نگری", en: "Attention to detail" },
  tosif: { fa: "توصیف", en: "Description" },
  revayat: { fa: "روایت", en: "Narration" },
  bayan_ehsas: { fa: "بیان احساس", en: "Expressing feelings" },
  takhayol: { fa: "تخیل", en: "Imagination" },
  porseshgari: { fa: "پرسشگری", en: "Questioning" },
  moghayese: { fa: "مقایسه", en: "Comparison" },
  didgah: { fa: "دیدگاه", en: "Perspective" },
  ertebatsazi: { fa: "ارتباط‌سازی", en: "Making connections" },
  dalil_entekhab: { fa: "دلیل انتخاب", en: "Reason for a choice" },
  bazandishi: { fa: "بازاندیشی", en: "Reflection" },
};

const outputFormLabels: Record<OutputForm, { fa: string; en: string }> = {
  description: { fa: "توصیف", en: "Description" },
  list: { fa: "فهرست", en: "List" },
  narrative: { fa: "روایت", en: "Narrative" },
  letter: { fa: "نامه", en: "Letter" },
  dialogue: { fa: "گفت‌وگو", en: "Dialogue" },
  interview: { fa: "مصاحبه", en: "Interview" },
  monologue: { fa: "تک‌گویی", en: "Monologue" },
  report: { fa: "گزارش", en: "Report" },
  analysis: { fa: "تحلیل", en: "Analysis" },
  interpretation: { fa: "تفسیر", en: "Interpretation" },
  argument: { fa: "استدلال", en: "Argument" },
  hypothesis_evidence: { fa: "فرضیه و شواهد", en: "Hypothesis and evidence" },
  decision_reason: { fa: "دلیل تصمیم", en: "Reason for a decision" },
  question_chain: { fa: "زنجیرهٔ پرسش", en: "Chain of questions" },
  text_rewrite: { fa: "بازنویسی متن", en: "Text rewriting" },
  text_extension: { fa: "گسترش متن", en: "Text expansion" },
  text_variants: { fa: "گونه‌های مختلف متن", en: "Text variations" },
};

const executionStructureLabels: Record<
  ExecutionStructure,
  { fa: string; en: string }
> = {
  individual: { fa: "فردی", en: "Individual" },
  pair: { fa: "دونفره", en: "Pair" },
  group: { fa: "گروهی", en: "Group" },
};

export default function ActivityComposerPanel() {
  const { language } = useLanguage();
  const isFa = language === "fa";

  const [cognitiveMove, setCognitiveMove] =
    useState<ThinkingMovement>("takhayol");

  const [outputForm, setOutputForm] =
    useState<OutputForm>("description");

  const [executionStructure, setExecutionStructure] =
    useState<ExecutionStructure>("individual");

  const [results, setResults] = useState<
    ReturnType<typeof composeActivities>["matches"]
  >([]);

  function handleCompose() {
    const result = composeActivities({
      cognitiveMove,
      outputForm,
      executionStructure,
      limit: 5,
    });

    setResults(result.matches);
  }

  const text = isFa
    ? {
        title: "ترکیب‌گر آزمایشی فعالیت‌ها",
        description:
          "حرکت فکری، شکل خروجی و ساختار اجرای فعالیت را انتخاب کنید.",
        thinkingMove: "حرکت فکری",
        outputForm: "شکل خروجی",
        executionStructure: "ساختار اجرا",
        suggest: "پیشنهاد بده",
        suggestions: "پیشنهادها",
        activity: "فعالیت",
        choose: "انتخاب این فعالیت",
        noResults: "هنوز پیشنهادی نمایش داده نشده است.",
      }
    : {
        title: "Experimental Activity Composer",
        description:
          "Choose a thinking movement, output form, and execution structure.",
        thinkingMove: "Thinking movement",
        outputForm: "Output form",
        executionStructure: "Execution structure",
        suggest: "Suggest activities",
        suggestions: "Suggestions",
        activity: "Activity",
        choose: "Choose this activity",
        noResults: "No suggestions to display yet.",
      };

  return (
    <section
      lang={language}
      dir={isFa ? "rtl" : "ltr"}
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <h2>{text.title}</h2>

      <p>{text.description}</p>

      <div
        style={{
          display: "grid",
          gap: 16,
          marginTop: 24,
        }}
      >
        <label>
          <div>{text.thinkingMove}</div>

          <select
            value={cognitiveMove}
            onChange={(event) =>
              setCognitiveMove(event.target.value as ThinkingMovement)
            }
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          >
            {thinkingMoves.map((move) => (
              <option key={move} value={move}>
                {thinkingMovementLabels[move][language]}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div>{text.outputForm}</div>

          <select
            value={outputForm}
            onChange={(event) =>
              setOutputForm(event.target.value as OutputForm)
            }
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          >
            {outputForms.map((form) => (
              <option key={form} value={form}>
                {outputFormLabels[form][language]}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div>{text.executionStructure}</div>

          <select
            value={executionStructure}
            onChange={(event) =>
              setExecutionStructure(
                event.target.value as ExecutionStructure,
              )
            }
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          >
            {executionStructures.map((structure) => (
              <option key={structure} value={structure}>
                {executionStructureLabels[structure][language]}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={handleCompose}
          style={{
            padding: "10px 16px",
            cursor: "pointer",
          }}
        >
          {text.suggest}
        </button>
      </div>

      {results.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h3>{text.suggestions}</h3>

          <div
            style={{
              display: "grid",
              gap: 12,
              marginTop: 16,
            }}
          >
            {results.map((result) => {
              const data = getSituationById(result.activityId);

              if (!data) {
                return null;
              }

              return (
                <article
                  key={result.activityId}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    padding: 16,
                  }}
                >
                  <strong>
                    {text.activity}: {result.activityId}
                  </strong>

                  <div style={{ marginTop: 12 }}>
                    <span>
                      {text.thinkingMove}:{" "}
                      {thinkingMovementLabels[cognitiveMove][language]}
                    </span>

                    <span> • </span>

                    <span>
                      {text.outputForm}:{" "}
                      {outputFormLabels[outputForm][language]}
                    </span>

                    <span> • </span>

                    <span>
                      {text.executionStructure}:{" "}
                      {executionStructureLabels[executionStructure][language]}
                    </span>
                  </div>

                  <button
                    type="button"
                    style={{
                      marginTop: 16,
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    {text.choose}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}