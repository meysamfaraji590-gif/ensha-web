
import type {
  ExecutionStructure,
  OutputForm,
  OutputStructure,
  StudentRole,
  TextOperation,
  ThinkingMovement,
} from "./activity-taxonomy";

export type TaxonomyLanguage = "fa" | "en";

// ─── Thinking movement ──────────────────────────────────────

export const thinkingMovementLabels: Record<ThinkingMovement, string> = {
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
  dalil_entekhab: "دلیل و انتخاب",
  bazandishi: "بازاندیشی",
};

export const thinkingMovementLabelsEn: Record<ThinkingMovement, string> = {
  mashahede: "Observation",
  jozeinegari: "Attention to Detail",
  tosif: "Description",
  revayat: "Narration",
  bayan_ehsas: "Expressing Feelings",
  takhayol: "Imagination",
  porseshgari: "Questioning",
  moghayese: "Comparison",
  didgah: "Perspective",
  ertebatsazi: "Making Connections",
  dalil_entekhab: "Reasoning and Choice",
  bazandishi: "Reflection",
};

// ─── Student role ───────────────────────────────────────────

export const studentRoleLabels: Record<StudentRole, string> = {
  observer: "مشاهده‌گر",
  detective: "کارآگاه",
  explorer: "کاوشگر",
  narrator: "راوی",
  interviewer: "مصاحبه‌کننده",
  decision_maker: "تصمیم‌گیرنده",
  chooser: "انتخاب‌کننده",
  witness: "شاهد",
  critic: "منتقد",
  letter_writer: "نامه‌نویس",
  questioner: "پرسشگر",
  imaginary_historian: "مورخ خیالی",
  representative_citizen: "شهروند نماینده",
  role_player: "ایفاکننده نقش",
  nonhuman_character: "شخصیت غیرانسانی",
  reporter: "گزارشگر",
  listener: "شنونده",
  passenger: "مسافر",
  none: "بدون نقش",
};

export const studentRoleLabelsEn: Record<StudentRole, string> = {
  observer: "Observer",
  detective: "Detective",
  explorer: "Explorer",
  narrator: "Narrator",
  interviewer: "Interviewer",
  decision_maker: "Decision-Maker",
  chooser: "Chooser",
  witness: "Witness",
  critic: "Critic",
  letter_writer: "Letter Writer",
  questioner: "Questioner",
  imaginary_historian: "Imaginary Historian",
  representative_citizen: "Representative Citizen",
  role_player: "Role-Player",
  nonhuman_character: "Nonhuman Character",
  reporter: "Reporter",
  listener: "Listener",
  passenger: "Passenger",
  none: "No Role",
};

// ─── Text operation ─────────────────────────────────────────

export const textOperationLabels: Record<TextOperation, string> = {
  compress: "فشرده‌سازی",
  expand_preceding: "گسترش پیش‌داستان",
  expand_following: "گسترش پس‌داستان",
  change_viewpoint: "تغییر زاویه‌دید",
  change_variable: "تغییر یک مؤلفه",
  change_tone: "تغییر لحن",
  reorder: "جابه‌جایی ترتیب",
  parallel_variants: "ساخت نسخه‌های موازی",
  reflective_revision: "بازنگری تأملی",
  change_audience: "تغییر مخاطب",
  none: "بدون عملیات متنی",
};

export const textOperationLabelsEn: Record<TextOperation, string> = {
  compress: "Condensation",
  expand_preceding: "Expand the Backstory",
  expand_following: "Expand the Subsequent Story",
  change_viewpoint: "Change the Point of View",
  change_variable: "Change One Element",
  change_tone: "Change the Tone",
  reorder: "Reorder",
  parallel_variants: "Create Parallel Versions",
  reflective_revision: "Reflective Revision",
  change_audience: "Change the Audience",
  none: "No Text Operation",
};

// ─── Output form ────────────────────────────────────────────

export const outputFormLabels: Record<OutputForm, string> = {
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
  decision_reason: "تصمیم و دلیل",
  question_chain: "زنجیره پرسش",
  text_rewrite: "بازنویسی متن",
  text_extension: "گسترش متن",
  text_variants: "نسخه‌های متفاوت متن",
};

export const outputFormLabelsEn: Record<OutputForm, string> = {
  description: "Description",
  list: "List",
  narrative: "Narrative",
  letter: "Letter",
  dialogue: "Dialogue",
  interview: "Interview",
  monologue: "Monologue",
  report: "Report",
  analysis: "Analysis",
  interpretation: "Interpretation",
  argument: "Argument",
  hypothesis_evidence: "Hypothesis and Evidence",
  decision_reason: "Decision and Reason",
  question_chain: "Chain of Questions",
  text_rewrite: "Text Rewrite",
  text_extension: "Text Extension",
  text_variants: "Alternative Text Versions",
};

// ─── Output structure ───────────────────────────────────────

export const outputStructureLabels: Record<OutputStructure, string> = {
  free_description: "توصیف آزاد",
  ordered_list: "فهرست منظم",
  sensory_description: "توصیف حسی",
  narrative_sequence: "توالی روایی",
  three_part_narrative: "روایت سه‌بخشی",
  question_answer: "پرسش و پاسخ",
  dialogue: "ساختار گفت‌وگویی",
  comparison: "مقایسه",
  claim_reason: "ادعا و دلیل",
  claim_evidence: "ادعا و شواهد",
  hypothesis_evidence: "فرضیه و شواهد",
  decision_consequence: "تصمیم و پیامد",
  question_chain: "زنجیره پرسش",
  before_after: "قبل و بعد",
  parallel_variants: "نسخه‌های موازی",
  text_extension: "گسترش متن",
  reflective_revision: "بازنگری تأملی",
  none: "بدون ساختار مشخص",
  cause_effect: "علت و پیامد",
};

export const outputStructureLabelsEn: Record<OutputStructure, string> = {
  free_description: "Free Description",
  ordered_list: "Ordered List",
  sensory_description: "Sensory Description",
  narrative_sequence: "Narrative Sequence",
  three_part_narrative: "Three-Part Narrative",
  question_answer: "Question and Answer",
  dialogue: "Dialogue Structure",
  comparison: "Comparison",
  claim_reason: "Claim and Reason",
  claim_evidence: "Claim and Evidence",
  hypothesis_evidence: "Hypothesis and Evidence",
  decision_consequence: "Decision and Consequence",
  question_chain: "Chain of Questions",
  before_after: "Before and After",
  parallel_variants: "Parallel Versions",
  text_extension: "Text Extension",
  reflective_revision: "Reflective Revision",
  none: "No Defined Structure",
  cause_effect: "Cause and Effect",
};

// ─── Execution structure ────────────────────────────────────

export const executionStructureLabels: Record<ExecutionStructure, string> = {
  individual: "فردی",
  pair: "دو نفره",
  group: "گروهی",
};

export const executionStructureLabelsEn: Record<ExecutionStructure, string> = {
  individual: "Individual",
  pair: "Pair Work",
  group: "Group Work",
};

// ─── Language-aware label collections ───────────────────────

export const taxonomyLabels = {
  fa: {
    thinkingMovement: thinkingMovementLabels,
    studentRole: studentRoleLabels,
    textOperation: textOperationLabels,
    outputForm: outputFormLabels,
    outputStructure: outputStructureLabels,
    executionStructure: executionStructureLabels,
  },
  en: {
    thinkingMovement: thinkingMovementLabelsEn,
    studentRole: studentRoleLabelsEn,
    textOperation: textOperationLabelsEn,
    outputForm: outputFormLabelsEn,
    outputStructure: outputStructureLabelsEn,
    executionStructure: executionStructureLabelsEn,
  },
} satisfies Record<
  TaxonomyLanguage,
  {
    thinkingMovement: Record<ThinkingMovement, string>;
    studentRole: Record<StudentRole, string>;
    textOperation: Record<TextOperation, string>;
    outputForm: Record<OutputForm, string>;
    outputStructure: Record<OutputStructure, string>;
    executionStructure: Record<ExecutionStructure, string>;
  }
>;
