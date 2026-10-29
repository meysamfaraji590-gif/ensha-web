"use client";

import { useState } from "react";

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

// Labels for UI
const thinkingMovementLabels: Record<ThinkingMovement, string> = {
  mashahede: "مشاهده",
  jozeinegari: "جزئی‌نگری",
  tosif: "توصیف",
  revayat: "روایت",
  bayan_ehsas: "بیان احساس",
  takhayol: "تخیل",
  porseshgari: "پرسشگری",
  moghayese: "مقایسه",
  didgah: "دیدگاه",
  ertebatsazi: "ارتباط‌سازی",
  dalil_entekhab: "دلیل انتخاب",
  bazandishi: "بازاندیشی",
};

const outputFormLabels: Record<OutputForm, string> = {
  description: "توصیف",
  list: "فهرست",
  narrative: "روایت",
  letter: "نامه",
  dialogue: "گفت‌وگو",
  interview: "مصاحبه",
  monologue: "تک‌گویی",
  report: "گزارش",
  analysis: "تحلیل",
  interpretation: "تفسیر",
  argument: "استدلال",
  hypothesis_evidence: "فرضیه و شواهد",
  decision_reason: "دلیل تصمیم",
  question_chain: "زنجیره پرسش",
  text_rewrite: "بازنویسی متن",
  text_extension: "گسترش متن",
  text_variants: "گونه‌های مختلف متن",
};

const executionStructureLabels: Record<ExecutionStructure, string> = {
  individual: "فردی",
  pair: "دو نفره",
  group: "گروهی",
};
export default function ActivityComposerPanel() {
  const [cognitiveMove, setCognitiveMove] =
    useState<ThinkingMovement>("takhayol");

  const [outputForm, setOutputForm] = useState<OutputForm>("description");

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

  return (
    <section
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <h2>Composer آزمایشی</h2>

      <p>حرکت فکری، شکل خروجی و ساختار اجرای فعالیت را انتخاب کنید.</p>

      <div
        style={{
          display: "grid",
          gap: 16,
          marginTop: 24,
        }}
      >
        <label>
          <div>حرکت فکری</div>

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
                {move}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div>شکل خروجی</div>

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
                {form}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div>ساختار اجرا</div>

          <select
            value={executionStructure}
            onChange={(event) =>
              setExecutionStructure(event.target.value as ExecutionStructure)
            }
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
            }}
          >
            {executionStructures.map((structure) => (
              <option key={structure} value={structure}>
                {structure}
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
          پیشنهاد بده
        </button>
      </div>

      {results.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h3>پیشنهادها</h3>

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
                  <strong>{result.activityId}</strong>

                  <h4
                    style={{
                      marginTop: 8,
                      fontSize: 18,
                    }}
                  ></h4>

                  <span>
                    حرکت فکری: {thinkingMovementLabels[cognitiveMove]}
                  </span>

                  <span>•</span>

                  <span>شکل خروجی: {outputFormLabels[outputForm]}</span>

                  <span>•</span>

                  <span>
                    اجرا: {executionStructureLabels[executionStructure]}
                  </span>

                  <button
                    type="button"
                    style={{
                      marginTop: 16,
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    انتخاب این فعالیت
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
