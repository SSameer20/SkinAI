export type SkinCondition = {
  description: string;
  precautions: string[];
};

export type SkinConditionResult = {
  condition: string;
  information: SkinCondition;
};

export type SkinConditionError = {
  error: string;
};

export function getSkinConditionInfo(className: string): SkinConditionResult {
  /** Returns description and precautions for a given skin condition class name */

  const conditionInfo: Record<string, SkinCondition> = {
    "Acne and Rosacea Photos": {
      description:
        "Acne is a skin condition that occurs when hair follicles become plugged with oil and dead skin cells. Rosacea is a chronic skin condition that causes redness and visible blood vessels in the face.",
      precautions: [
        "Keep skin clean with gentle, non-abrasive cleansers",
        "Avoid oil-based skin products",
        "Use sunscreen daily",
        "Avoid triggers like spicy foods, alcohol, and extreme temperatures for rosacea",
        "Consult a dermatologist for persistent cases",
      ],
    },
    "Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions": {
      description:
        "Actinic keratosis are rough, scaly patches caused by sun damage that can develop into skin cancer. Basal cell carcinoma is the most common type of skin cancer.",
      precautions: [
        "Regular skin checks with a dermatologist",
        "Use broad-spectrum sunscreen with SPF 30+",
        "Avoid tanning beds",
        "Wear protective clothing in the sun",
        "Monitor any changing skin lesions",
      ],
    },
    "Atopic Dermatitis Photos": {
      description:
        "Atopic dermatitis (eczema) is a condition that makes skin red and itchy. Common in children but can occur at any age.",
      precautions: [
        "Moisturize skin regularly",
        "Use mild, fragrance-free soaps",
        "Avoid scratching",
        "Identify and avoid triggers",
        "Use humidifier in dry weather",
      ],
    },
    "Psoriasis pictures Lichen Planus and related diseases": {
      description:
        "Psoriasis is an autoimmune condition causing rapid skin cell buildup leading to scaling. Lichen planus is an inflammatory condition affecting skin and mucous membranes.",
      precautions: [
        "Moisturize regularly",
        "Avoid skin injuries",
        "Limit alcohol consumption",
        "Manage stress",
        "Consider phototherapy options",
      ],
    },
    "Melanoma Skin Cancer Nevi and Moles": {
      description:
        "Melanoma is the most serious type of skin cancer that develops in melanocytes. Nevi are benign moles that can sometimes develop into melanoma.",
      precautions: [
        "Regular self-examinations using ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving)",
        "Annual skin checks with dermatologist",
        "Avoid excessive sun exposure",
        "Use sunscreen daily",
        "Monitor changing moles",
      ],
    },
    // Add other conditions here following the same pattern
  };

  return {
    condition: className,
    information:
      conditionInfo[className] || "Condition information not available",
  };
}
