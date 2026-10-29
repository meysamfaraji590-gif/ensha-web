// components/activity/activity-taxonomy.ts

export type ThinkingMovement =
  | "mashahede"
  | "jozeinegari"
  | "tosif"
  | "revayat"
  | "bayan_ehsas"
  | "takhayol"
  | "porseshgari"
  | "moghayese"
  | "didgah"
  | "ertebatsazi"
  | "dalil_entekhab"
  | "bazandishi";

export type StudentRole =
  // نقش‌های واقعی / هویت‌های فرضی
  | "observer"
  | "detective"
  | "explorer"
  | "narrator"
  | "interviewer"
  | "decision_maker"
  | "chooser"
  | "witness"
  | "critic"
  | "letter_writer"
  | "questioner"
  | "imaginary_historian"
  | "representative_citizen"
  | "role_player"
  | "nonhuman_character"
  | "reporter"
  | "listener"
  | "passenger"
  | "none";

export type TextOperation =
  // عملیات مشخص روی متن؛ مخصوصاً برای سرزمین بازنویسی
  | "compress"
  | "expand_preceding"
  | "expand_following"
  | "change_viewpoint"
  | "change_variable"
  | "change_tone"
  | "reorder"
  | "parallel_variants"
  | "reflective_revision"
  | "change_audience"
  | "none";

export type OutputForm =
  | "description"
  | "list"
  | "narrative"
  | "letter"
  | "dialogue"
  | "interview"
  | "monologue"
  | "report"
  | "analysis"
  | "interpretation"
  | "argument"
  | "hypothesis_evidence"
  | "decision_reason"
  | "question_chain"
  | "text_rewrite"
  | "text_extension"
  | "text_variants";

export type OutputStructure =
  | "free_description"
  | "ordered_list"
  | "sensory_description"
  | "narrative_sequence"
  | "three_part_narrative"
  | "question_answer"
  | "dialogue"
  | "comparison"
  | "claim_reason"
  | "claim_evidence"
  | "hypothesis_evidence"
  | "decision_consequence"
  | "question_chain"
  | "before_after"
  | "parallel_variants"
  | "text_extension"
  | "reflective_revision"
  | "none"
  | "cause_effect";

export type ExecutionStructure = "individual" | "pair" | "group";

export type ActivityTaxonomy = {
  cognitiveMove: ThinkingMovement;
  studentRole: StudentRole;
  textOperation?: TextOperation;
  outputForm: OutputForm;
  outputStructure?: OutputStructure;
  executionStructure: ExecutionStructure;
};
