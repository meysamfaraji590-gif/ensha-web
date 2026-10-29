// components/activity/activity-taxonomy-map.ts

import type { ActivityTaxonomy } from "./activity-taxonomy";

export type ActivityTaxonomyMapping = {
  id: string;
  taxonomy: ActivityTaxonomy;
};

const individual = "individual" as const;
const pair = "pair" as const;

export const activityTaxonomyMap: ActivityTaxonomyMapping[] = [
  // =========================================================
  // 01M — مشاهده
  // =========================================================

  {
    id: "01M-01",
    taxonomy: {
      cognitiveMove: "mashahede",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "01M-02",
    taxonomy: {
      cognitiveMove: "jozeinegari",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "01M-03",
    taxonomy: {
      cognitiveMove: "tosif",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "01M-04",
    taxonomy: {
      cognitiveMove: "mashahede",
      studentRole: "detective",
      outputForm: "report",
      outputStructure: "claim_evidence",
      executionStructure: individual,
    },
  },

  {
    id: "01M-05",
    taxonomy: {
      cognitiveMove: "jozeinegari",
      studentRole: "observer",
      outputForm: "list",
      outputStructure: "ordered_list",
      executionStructure: individual,
    },
  },

  {
    id: "01M-06",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "01M-07",
    taxonomy: {
      cognitiveMove: "ertebatsazi",
      studentRole: "explorer",
      outputForm: "description",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "01M-08",
    taxonomy: {
      cognitiveMove: "jozeinegari",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "01M-09",
    taxonomy: {
      cognitiveMove: "mashahede",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "comparison",
      executionStructure: pair,
    },
  },

  {
    id: "01M-10",
    taxonomy: {
      cognitiveMove: "jozeinegari",
      studentRole: "detective",
      outputForm: "description",
      outputStructure: "claim_evidence",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 02M — روایت
  // =========================================================

  {
    id: "02M-01",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-02",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-03",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "three_part_narrative",
      executionStructure: individual,
    },
  },

  {
    id: "02M-04",
    taxonomy: {
      cognitiveMove: "ertebatsazi",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-05",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-06",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "witness",
      outputForm: "narrative",
      outputStructure: "three_part_narrative",
      executionStructure: individual,
    },
  },

  {
    id: "02M-07",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-08",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-09",
    taxonomy: {
      cognitiveMove: "revayat",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "02M-10",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "three_part_narrative",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 03M — بیان احساس
  // =========================================================

  {
    id: "03M-01",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "narrator",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-02",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "narrator",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-03",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "none",
      outputForm: "description",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-04",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "none",
      outputForm: "description",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-05",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "none",
      outputForm: "description",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-06",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "listener",
      outputForm: "interpretation",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-07",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "witness",
      outputForm: "monologue",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "03M-08",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "none",
      outputForm: "description",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "03M-09",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "explorer",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "03M-10",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 04M — نامه
  // =========================================================

  {
    id: "04M-01",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-02",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-03",
    taxonomy: {
      cognitiveMove: "ertebatsazi",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-04",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-05",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-06",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-07",
    taxonomy: {
      cognitiveMove: "mashahede",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "sensory_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-08",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "04M-09",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "reflective_revision",
      executionStructure: individual,
    },
  },

  {
    id: "04M-10",
    taxonomy: {
      cognitiveMove: "bayan_ehsas",
      studentRole: "letter_writer",
      outputForm: "letter",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 05M — مقایسه
  // =========================================================

  {
    id: "05M-01",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "detective",
      outputForm: "hypothesis_evidence",
      outputStructure: "claim_evidence",
      executionStructure: individual,
    },
  },

  {
    id: "05M-02",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "critic",
      outputForm: "interpretation",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-03",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "critic",
      outputForm: "analysis",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-04",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "listener",
      outputForm: "interpretation",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-05",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "analyst" as never,
      outputForm: "analysis",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-06",
    taxonomy: {
      cognitiveMove: "ertebatsazi",
      studentRole: "analyst" as never,
      outputForm: "analysis",
      outputStructure: "decision_consequence",
      executionStructure: individual,
    },
  },

  {
    id: "05M-07",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-08",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "observer",
      outputForm: "description",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  {
    id: "05M-09",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "decision_reason",
      outputStructure: "decision_consequence",
      executionStructure: individual,
    },
  },

  {
    id: "05M-10",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "chooser",
      outputForm: "interpretation",
      outputStructure: "comparison",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 06M — تخیل
  // =========================================================

  {
    id: "06M-01",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "narrator",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "06M-02",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "imaginary_historian",
      outputForm: "report",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "06M-03",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "explorer",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "06M-04",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "role_player",
      outputForm: "narrative",
      outputStructure: "three_part_narrative",
      executionStructure: individual,
    },
  },

  {
    id: "06M-05",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "nonhuman_character",
      outputForm: "monologue",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "06M-06",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "observer",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "06M-07",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "interviewer",
      outputForm: "interview",
      outputStructure: "question_answer",
      executionStructure: individual,
    },
  },

  {
    id: "06M-08",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "explorer",
      outputForm: "description",
      outputStructure: "free_description",
      executionStructure: individual,
    },
  },

  {
    id: "06M-09",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "role_player",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "06M-10",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "role_player",
      outputForm: "narrative",
      outputStructure: "three_part_narrative",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 07M — گفت‌وگو
  // =========================================================

  {
    id: "07M-01",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "role_player",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-02",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "role_player",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: pair,
    },
  },

  {
    id: "07M-03",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "interviewer",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-04",
    taxonomy: {
      cognitiveMove: "moghayese",
      studentRole: "role_player",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: pair,
    },
  },

  {
    id: "07M-05",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "role_player",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-06",
    taxonomy: {
      cognitiveMove: "takhayol",
      studentRole: "role_player",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-07",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "questioner",
      outputForm: "dialogue",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "07M-08",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "interviewer",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-09",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "detective",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  {
    id: "07M-10",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "nonhuman_character",
      outputForm: "dialogue",
      outputStructure: "dialogue",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 08M — بازنویسی
  // =========================================================

  {
    id: "08M-01",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "compress",
      outputForm: "text_rewrite",
      outputStructure: "before_after",
      executionStructure: individual,
    },
  },

  {
    id: "08M-02",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "none",
      textOperation: "change_viewpoint",
      outputForm: "text_rewrite",
      outputStructure: "parallel_variants",
      executionStructure: individual,
    },
  },

  {
    id: "08M-03",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "change_variable",
      outputForm: "text_rewrite",
      outputStructure: "cause_effect",
      executionStructure: individual,
    },
  },

  {
    id: "08M-04",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "expand_preceding",
      outputForm: "text_extension",
      outputStructure: "text_extension",
      executionStructure: individual,
    },
  },

  {
    id: "08M-05",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "expand_following",
      outputForm: "text_extension",
      outputStructure: "text_extension",
      executionStructure: individual,
    },
  },

  {
    id: "08M-06",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "compress",
      outputForm: "text_rewrite",
      outputStructure: "before_after",
      executionStructure: individual,
    },
  },

  {
    id: "08M-07",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "reorder",
      outputForm: "text_rewrite",
      outputStructure: "parallel_variants",
      executionStructure: individual,
    },
  },

  {
    id: "08M-08",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "change_tone",
      outputForm: "text_rewrite",
      outputStructure: "parallel_variants",
      executionStructure: individual,
    },
  },

  {
    id: "08M-09",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "parallel_variants",
      outputForm: "text_variants",
      outputStructure: "parallel_variants",
      executionStructure: individual,
    },
  },

  {
    id: "08M-10",
    taxonomy: {
      cognitiveMove: "bazandishi",
      studentRole: "none",
      textOperation: "reflective_revision",
      outputForm: "text_rewrite",
      outputStructure: "reflective_revision",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 09M — پرسش‌نویسی
  // =========================================================

  {
    id: "09M-01",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "questioner",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-02",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "role_player",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-03",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "detective",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-04",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "detective",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-05",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "detective",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-06",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "questioner",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-07",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "questioner",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-08",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "questioner",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-09",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "imaginary_historian",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  {
    id: "09M-10",
    taxonomy: {
      cognitiveMove: "porseshgari",
      studentRole: "passenger",
      outputForm: "list",
      outputStructure: "question_chain",
      executionStructure: individual,
    },
  },

  // =========================================================
  // 10M — انتخاب
  // =========================================================

  {
    id: "10M-01",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "decision_reason",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "10M-02",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "argument",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "10M-03",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "chooser",
      outputForm: "decision_reason",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "10M-04",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "representative_citizen",
      outputForm: "argument",
      outputStructure: "claim_evidence",
      executionStructure: individual,
    },
  },

  {
    id: "10M-05",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "decision_reason",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "10M-06",
    taxonomy: {
      cognitiveMove: "didgah",
      studentRole: "role_player",
      outputForm: "narrative",
      outputStructure: "narrative_sequence",
      executionStructure: individual,
    },
  },

  {
    id: "10M-07",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "argument",
      outputStructure: "decision_consequence",
      executionStructure: individual,
    },
  },

  {
    id: "10M-08",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "list",
      outputStructure: "claim_reason",
      executionStructure: individual,
    },
  },

  {
    id: "10M-09",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "chooser",
      outputForm: "decision_reason",
      outputStructure: "decision_consequence",
      executionStructure: individual,
    },
  },

  {
    id: "10M-10",
    taxonomy: {
      cognitiveMove: "dalil_entekhab",
      studentRole: "decision_maker",
      outputForm: "decision_reason",
      outputStructure: "decision_consequence",
      executionStructure: individual,
    },
  },
];

export const activityTaxonomyById: Record<string, ActivityTaxonomy> =
  Object.fromEntries(
    activityTaxonomyMap.map(({ id, taxonomy }) => [id, taxonomy]),
  ) as Record<string, ActivityTaxonomy>;
