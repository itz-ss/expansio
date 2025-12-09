// src/data/servicesData.js
// Complete service dataset for all treatments (spine, brain, bone)
// Each entry is designed for patient-friendly readability and integration with TreatmentPage

export const servicesData = {
  // Dr Achal  //waring: do not change the key 'spine' or "brain"
  // instead of Spine Treatments its now Dr Achal Gupta so do not change the key who ever you are otherwise be ready to change all imports
  spine: [
    {
      label: " Social Media Management", //1
      to: "/treatments/slipped-disc-surgery",
      banner: "/assets/banner/slip-disc-surgery.jpg",
      image: "/assets/treatmentPhotos/slipped-disc-surgery.jpg",
      description:
        "A slipped disc occurs when the cushion between spinal bones bulges out or ruptures, pressing on nearby nerves. Surgery removes or repairs the disc to relieve pain, restore movement, and prevent further nerve damage. Minimally invasive techniques ensure faster healing, minimal scars, and quicker return to daily life.",
      commonConditions: [
        "Herniated Discs",
        "Sciatica",
        "Nerve Compression",
        "Chronic Back Pain",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physical therapy, medications, rest, and posture correction exercises.",
        surgical:
          "Endoscopic discectomy, microdiscectomy, or spinal fusion for severe compression.",
      },
    },
    {
      label: "Content Creation (Reels, Videos & Ads)", //2
      to: "/treatments/cervical-spondylosis",
      banner: "/assets/banner/Cervical-spondylosis.png",
      image: "/assets/treatmentPhotos/cervical-spondylosis.jpg",
      description:
        "Cervical spondylosis is age-related degeneration of the neck bones and discs. It can cause stiffness, pain, and tingling in the shoulders and arms due to nerve compression. Treatment focuses on pain relief, posture correction, and, in advanced cases, surgical decompression for long-term relief.",
      commonConditions: [
        "Neck Pain",
        "Shoulder Weakness",
        "Arm Numbness",
        "Cervical Disc Disease",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, anti-inflammatory drugs, neck support, and stretching exercises.",
        surgical:
          "Cervical decompression or fusion to relieve pressure and stabilize the spine.",
      },
    },
    {
      label: " Performance Marketing & Paid Advertising", //3
      to: "/treatments/spondylolisthesis",
      banner: "/assets/banner/Spondylolisthesis.jpg",
      image: "/assets/treatmentPhotos/spondylolisthesis.jpg",
      description:
        "Spondylolisthesis happens when one vertebra slips forward over another, leading to back pain and nerve pressure. The aim of surgery is to realign the vertebrae, restore stability, and relieve pain. Modern fixation techniques ensure a safe and durable outcome with minimal downtime.",
      commonConditions: [
        "Slipped Vertebra",
        "Lower Back Pain",
        "Leg Pain",
        "Spinal Instability",
      ],
      treatmentOptions: {
        nonSurgical:
          "Bracing, posture training, pain management, and core-strengthening exercises.",
        surgical:
          "Spinal fusion using rods and screws or minimally invasive stabilization.",
      },
    },
    {
      label: " Meta Ads Management", //4
      to: "/treatments/endoscopic-spine-surgery",
      banner: "/assets/banner/Endoscopic-spine-surgery.jpg",// updated banner path
      image: "/assets/treatmentPhotos/endoscopic-spine.png",
      description:
        "Endoscopic spine surgery uses a small camera and precise tools to correct spinal problems through a tiny incision. This modern approach minimizes tissue damage, reduces hospital stay, and ensures a quicker return to work and normal activities with minimal discomfort.",
      commonConditions: [
        "Disc Herniation",
        "Lumbar Canal Stenosis",
        "Sciatica",
        "Degenerative Spine Disease",
      ],
      treatmentOptions: {
        nonSurgical:
          "Medications, physiotherapy, and activity modification for early cases.",
        surgical:
          "Endoscopic discectomy, foraminotomy, or decompression through small incisions.",
      },
    },
    {
      label: " Google Ads & PPC Consulting", //5
      to: "/treatments/minimally-invasive-spine-surgery",
      banner: "/assets/banner/Minimally-invasive-spine-surgery.jpg",
      image: "/assets/treatmentPhotos/Minimally-invasive-spine-surgery.png",
      description:
        "This advanced surgical approach treats spine problems through tiny cuts using specialized instruments. It reduces blood loss, postoperative pain, and muscle damage, allowing patients to recover quickly while maintaining spinal strength and stability.",
      commonConditions: [
        "Lumbar Canal Stenosis",
        "Herniated Discs",
        "Spine Fractures",
        "Spinal Instability",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, core stabilization, and guided exercise routines.",
        surgical:
          "Discectomy, laminotomy, or spinal fusion using navigation-guided systems.",
      },
    },
    {
      label: "  Search Engine Optimization (SEO)", //6
      to: "/treatments/tuberculosis-of-spine",
      banner: "/assets/banner/Tuberculosis-of-spine.jpg",
      image: "/assets/treatmentPhotos/spinal-tb.jpg",
      description:
        "Spinal tuberculosis (Pott’s disease) can weaken the spine and compress nerves, causing deformity and paralysis if untreated. Combined medical and surgical care removes infection, stabilizes the spine, and restores function for a pain-free, active life.",
      commonConditions: [
        "Pott’s Spine",
        "Chronic Back Pain",
        "Spinal Deformity",
      ],
      treatmentOptions: {
        nonSurgical:
          "Anti-tubercular medications and nutritional therapy.",
        surgical:
          "Debridement and stabilization through minimally invasive spine fusion.",
      },
    },
    {
      label: " Google My Business (GMB) Optimization", //7
      to: "/treatments/pediatric-spine-surgery",
      banner: "/assets/images/pediatric-spine-banner.jpg",
      image: "/assets/treatmentPhotos/pediatric-spine.jpg",
      description:
        "Children with spine deformities or birth defects may need corrective surgery. Pediatric spine surgery focuses on safe realignment, improving growth and posture, and preventing long-term complications. Each plan is personalized to ensure a gentle recovery.",
      commonConditions: [
        "Scoliosis",
        "Spinal Deformity",
        "Birth Defects",
      ],
      treatmentOptions: {
        nonSurgical:
          "Bracing, physiotherapy, and growth monitoring.",
        surgical:
          "Spinal correction and fixation for deformity or instability.",
      },
    },
    {
      label: "Website Design & Development", //8
      to: "/treatments/lumbar-spondylosis",
      banner: "/assets/banner/Lumbar-spondylosis.jpg",
      image: "/assets/treatmentPhotos/lumbar-spondylosis.jpg",
      description:
        "Lumbar spondylosis is the natural wear and tear of the lower spine due to age or heavy physical activity. It causes back pain, stiffness, and sometimes leg pain. Treatment focuses on mobility restoration and pain control for a better quality of life.",
      commonConditions: [
        "Degenerative Disc Disease",
        "Chronic Back Pain",
        "Stiffness",
      ],
      treatmentOptions: {
        nonSurgical:
          "Physiotherapy, pain relief medication, and posture correction.",
        surgical:
          "Minimally invasive decompression or fusion for severe cases.",
      },
    },
    {
      label: " Landing Pages & Funnel Development", //9
      to: "/treatments/fracture-management",
      banner: "/assets/banner/fracture-banner.jpg",
      image: "/assets/treatmentPhotos/fracture.jpg",
      description:
        "Fracture management involves aligning and stabilizing broken bones using advanced orthopedic techniques. Depending on severity, it can include splints, plates, or rods to restore strength, speed healing, and ensure proper bone alignment.",
      commonConditions: ["Trauma Fractures", "Sports Injuries", "Bone Breaks"],
      treatmentOptions: {
        nonSurgical: "Casts, braces, and physiotherapy.",
        surgical: "Open reduction with internal or external fixation devices.",
      },
    },
    {
      label: "Branding & Creative Direction", //10
      to: "/treatments/brain-tumor-surgery",
      banner: "/assets/banner/brain-tumor-surgery.jpg",
      image: "/assets/treatmentPhotos/spine-tumor.webp",
      description:
        "Brain tumor surgery removes abnormal tissue growths while preserving brain function. With advanced neuro-navigation and precision microsurgery, the procedure ensures safety and optimal recovery for both benign and malignant tumors.",
      commonConditions: [
        "Meningioma",
        "Glioma",
        "Acoustic Neuroma",
        "Pituitary Tumor",
      ],
      treatmentOptions: {
        nonSurgical: "Medication, radiation therapy, or chemotherapy.",
        surgical:
          "Microsurgical resection, endoscopic removal, or neuronavigation-guided surgery.",
      },
    },

    {
    label: "Logo Design & Visual Identity", //11
    to: "/treatments/encephalopathy-encephalitis",
    banner: "/assets/banner/encephalitis.jpg",
    image: "/assets/treatmentPhotos/encephalopathy.jpg",

    // title: "Encephalitis is a term utilised to define the inflammation of the membranes that encompass the brain and spinal cord",
    description: "Encephalitis is a term utilised to define the inflammation of the membranes that encompass the brain and spinal cord. This condition causes some issues with the brain and spinal cord function. The inflammation causes the brain to swell that leads to changes in the kid's neurological condition, including mental confusion and seizures.",

    causes: {
      heading: "What causes encephalitis?",
      paragraph: "The cause of encephalitis varies depending on the season, the area of the country, and the exposure of the child. Viruses are the leading cause of encephalitis. Although vaccines for many viruses, including measles, mumps, rubella, and chickenpox have greatly lowered the rate of encephalitis from these diseases, other viruses can cause encephalitis. These include herpes simplex virus, West Nile virus (carried by mosquitoes) and rabies (carried by a number of different animals).\n\nEncephalitis can also happen following a bacterial infection, like Lyme disease, tuberculosis and syphilis, and by parasites, like toxoplasmosis."
    },

    riskFactors: {
      heading: "What are the symptoms?",
      points: [
        "Fever",
        "Headache",
        "Aversion to light",
        "Neck stiffness",
        "sleepiness",
        "Increased irritability",
        "Seizures",
        "Skin rashes",
        "Trouble in talking and speech changes"
      ]
    }
  },
],

  // Dr Konika Bansal
  brain: [
    {
  label: "Graphic Design & Business Collaterals", //12
  to: "/treatments/epilepsy",
  banner: "/assets/banner/Child-Epilepsy.jpg",
  image: "/assets/treatmentPhotos/epilepsy-banner.jpg",

  // title: "Epilepsy influences every kid in a different way",
  description: "Epilepsy influences every kid in a different way, depending upon their age, the sort of seizure they have, how well they respond to treatment, and some other existing health conditions.\n\nIn some cases, medicine can easily control seizures while different kids might encounter lifelong challenges with seizures.",

  causes: {
    heading: "What are the symptoms?",
    paragraph: "Seizures can be caused by abnormal bursts of electrical movement in the brain. They usually don't last for a long time; however, they can be frightening for families.\n\nThe symptoms of epileptic seizures can change; however, the following might be signs that your kid is experiencing seizures:",
    points: [
      "Staring and unresponsiveness",
      "Loss of awareness",
      "Sudden or rhythmic movements of the arms and legs",
      "Stiffening of the body, arms, or legs",
      "Disturbance in breathing",
      "Falling for no apparent cause",
      "Head nodding/jerking",
      "Periods of rapid blinking",
      "Unusual behaviours that appear to be out of place"
    ]
  },

  riskFactors: {
    heading: "How Is Epilepsy diagnosed?",
    points: [
      "Blood tests",
      "EEG to see brain waves/electrical action in the brain.",
      "VEEG, or video electroencephalography (EEG with video recording)",
      "CT scan, MRI scan to view inside the brain",
      "Genetic tests"
    ]
  }
},

{
  label: "Outdoor & Billboard Advertising", //13
  to: "/treatments/cerebral-palsy",
  banner: "/assets/banner/cerebral-palsy.jpg",
  image: "/assets/treatmentPhotos/Cerebral-Palsy.jpg",

  // title: "Cerebral palsy (CP) is a group of disorders that affect a person’s ability to move and maintain balance and posture",
  description: "Cerebral palsy (CP) is a group of disorders that affect a person’s ability to move and maintain balance and posture. CP is the most common motor disability in childhood. Cerebral means having to do with the brain. Palsy means weakness or problems with using the muscles. CP is caused by abnormal brain development or damage to the developing brain that affects a person’s ability to control his or her muscles.",

  causes: {
    heading: "What causes Cerebral Palsy in kids?",
    paragraph: "Cerebral Palsy happens when there is abnormal development of or damage to region of the brain that control motor function. This can occur before or during birth. Most cases of Cerebral palsy are congenital. Less commonly, CP can occur after birth. This is known as acquired CP and typically occurs from an infection or head injury.",
    pointsIntro: "In many cases, the specific reason for CP isn't known. It very well might be the result of an issue such as:",
    points: [
      "Absence of oxygen to the brain",
      "Hereditary condition",
      "Infection",
      "Bleeding in the brain",
      "Serious jaundice",
      "Head injury"
    ]
  },

  riskFactors: {
    heading: "Who are risk of developing Cerebral Palsy?",
    points: [
      "Preterm birth",
      "Inflammation of the placenta or amniotic fluid from an infection",
      "Blood clotting disorder",
      "Extremely low birthweight",
      "Infection with a virus",
      "Chemical or substance abuse during pregnancy",
      "Injury"
    ]
  }
},

{
  label: "Email Marketing & Automation", //14
  to: "/treatments/adhd",
  banner: "/assets/banner/adhd.jpg",
  image: "/assets/treatmentPhotos/ADHD.jpg",

  title: "What is ADHD?",
  description: "Attention Deficit disorder (ADD/ADHD) is a common childhood behavioural disorder that influences the child’s ability to organize, focus and complete a task. The way they act is impulsive without thinking and are quickly distracted. However, this kind of behaviour is common among kids what separates ADHD from normal kids by the persistence of symptoms and influences the kid's intellectual and social activity. The primary signs of ADHD are negligence (lack of focus), hyper activeness and imprudence. The degree of symptoms changes from one kid to another depending upon the dominating signs. ADHD is classified as Predominately inattentive, predominately hyperactive, or Combined.",

  causes: {
    heading: "Assisting a kid with ADHD",
    paragraph: "Whether or not your child’s signs of inattention, hyperactivity, and impulsivity are because of ADHD, they can lead to many issues whenever left untreated. Kids who can't focus and control themselves might struggle in school, cause problems, and find it hard to get with others or make friends. These frustrations and difficulties can prompt low confidence as well as friction and stress for the entire family."
  },

  riskFactors: {
    heading: "What are the causes for ADHD?",
    points: [
      "Genetic: it has been seen that ADHD runs in family, subsequently it is thought that genes play a role",
      "Low Birthweight or Premature birth",
      "Maternal elements like smoking or drinking during pregnancy",
      "A hypoxic condition during childbirth",
      "Ecological factors like exposure to Lead, Mercury",
      "Dietary issues like certain food additives, few protein deficiencies, and so forth."
    ]
  }
},

{
  label: " CRM Setup & Marketing Automation", //15
  to: "/treatments/child-stroke",
  banner: "/assets/banner/stroke-banner.jpg",
  image: "/assets/treatmentPhotos/childStroke.jpg",

  // title: "Pediatric stroke is a rare condition affecting one in every 4,000 newborns and an additional 2,000 older children each year.",
  description: "Pediatric stroke is a rare condition affecting one in every 4,000 newborns and an additional 2,000 older children each year. Stroke is a type of blood vessel (cerebrovascular) disorder. Strokes can be categorized as ischemic (caused by insufficient blood flow) and hemorrhagic (caused by bleeding into the brain). When a blood vessel in the brain is injured, the brain tissue around it loses blood supply and suffers injury as well. Treatments and long-term outcome in children are different for each type.",

  causes: {
    heading: "What are the signs and symptoms of pediatric stroke?",
    paragraph: "The symptoms might include:",
    points: [
      "weakness or numbness on one side of the body",
      "slurred speech or difficulty with language",
      "trouble balancing or walking",
      "vision problems, such as double vision or loss of vision",
      "sudden lethargy or drowsiness",
      "seizure (unusual rhythmic movement of one or both sides of the body)"
    ]
  },

  riskFactors: {
    heading: "What are the risk factors for pediatric stroke?",
    points: [
      "heart disease",
      "problems with blood vessels supplying the brain",
      "blood clotting disorders",
      "sickle cell disease"
    ]
  }
},

{
  label: " Lead Generation & Conversion Optimization", //16
  to: "/treatments/genetic-disorders",
  banner: "/assets/banner/genetic-disorders.jpg",
  image: "/assets/treatmentPhotos/genetic-disorders.jpg",

  title: "",
  description: "Genetic disorders occur when a mutation affects your genes or when you have the wrong amount of genetic material. Genetic disorders occur when a mutation (a harmful change to a gene, also known as a pathogenic variant) affects your genes or when you have the wrong amount of genetic material. Genes are made of DNA (deoxyribonucleic acid), which contain instructions for cell functioning and the characteristics that make you unique.\n\nYou receive half your genes from each biological parent and may inherit a gene mutation from one parent or both. Sometimes genes change due to issues within the DNA (mutations). This can raise your risk of having a genetic disorder. Some cause symptoms at birth, while others develop over time.",

  causes: {
    heading: "Genetic disorders can be:",
    paragraph: "",
    points: [
      "Chromosomal: This type affects the structures that hold your genes/DNA within each cell (chromosomes). With these conditions, people are missing or have duplicated chromosome material.",
      "Complex (multifactorial): These disorders stem from a combination of gene mutations and other factors. They include chemical exposure, diet, certain medications and tobacco or alcohol use.",
      "Single-gene (monogenic): This group of conditions occurs from a single gene mutation."
    ]
  }
},
{
  label: "Affiliate Marketing Solutions", //17
  to: "/treatments/global-developmental-delay",
  banner: "/assets/banner/global-developmental-delay.jpg",
  image: "/assets/treatmentPhotos/Global-Developmental-Delay.jpg",

  // title: "Developmental delay can be defined as a child who has not acquired the developmental skills expected of him or her",
  description: "Developmental delay can be defined as a child who has not acquired the developmental skills expected of him or her, compared with others of a similar age. Delays could occur in the areas of motor function, language and speech, cognitive, play, and social skills. Global developmental delay suggests a young child has significant delays in at least two of these developmental regions. Consult",

  causes: {
    heading: "What are the causes of developmental delay?",
    paragraph: "There isn't one reason for delays in development. Factors that might contribute can happen before a kid is born, during the birth process, and after birth. These could include:",
    points: [
      "Hereditary or genetic conditions like Down syndrome",
      "Metabolic disorders like phenylketonuria (PKU)",
      "Serious infections",
      "Deprivation of food or environment",
      "Trauma to the brain, like shaken baby syndrome",
      "Severe psychosocial trauma, like post-traumatic stress disorder",
      "Exposure to specific harmful substances like prenatal alcohol exposure or lead poisoning"
    ]
  }
},

{
  label: "Content Management & Scheduling", //18
  to: "/treatments/headache",
  banner: "/assets/banner/headache.jpg",
  image: "/assets/treatmentPhotos/Headaches.jpg",

  // title: "Headache are common in children, yet generally are not harmful and don't disturb their lives",
  description: "Headache are common in children, yet generally are not harmful and don't disturb their lives. However, in specific children, headaches become extreme or recurrent. On rare occasion, they may be the indication of a underlying disease. Dr Konika is the children headache specialist in Yeshwanthpur who gives accurate diagnosis and manage headache. Dr Konika and her team believes in giving comprehensive, compassionate care for children of all ages.",

  causes: {
    heading: "What are the two categories of headaches?",
    paragraph: "Children can have 2 categories of headaches:\n\nPrimary headache is diagnosed when the headache is the primary issue, and when the headache is controlled, the issue has been solved. Most primary headaches in kids are migraines or tension-type headaches.\nA secondary headache can be diagnosed when the headache is because of an underlying condition. Both the headache and other condition must be addressed and treated. Some of the conditions are dangerous but these are very uncommon. Other common issues that results in secondary headaches include depression, viral illnesses, sleep deprivation and caffeine withdrawal"
  },

  riskFactors: {
    heading: "What causes headaches in children?",
    points: [
      "Sinus infection",
      "Ear infections",
      "Sore throat",
      "Stress & Anxiety",
      "Depression",
      "Tension",
      "Exercising too much",
      "Meningitis",
      "Encephalitis",
      "Tumor",
      "Haemorrhage",
      "Simple sicknesses like flu, infection or fever"
    ]
  }
},

{
  label: "Analytics, Tracking & Reporting", //19
  to: "/treatments/botox-therapy-dystonia",
  banner: "/assets/banner/botox-dystonia.jpg",
  image: "/assets/treatmentPhotos/Botox-Therapy-in-Dystonia.jpg",

  // title: "What is Botulinum Neurotoxin Therapy?",
  description: "Botulinum neurotoxin injections are a localized treatment to relieve dystonia symptoms. Botulinum neurotoxin (BNT), a biological product, is injected into muscles where it relaxes the muscles and reduces excessive muscle contractions. BNT is derived from the bacterium Clostridium botulinum. Ironically this is the same bacterium responsible for botulism, a disease associated with eating contaminated food. BNT is used as a therapeutic agent to block the release of chemicals that activate muscle contractions.",

  causes: {
    heading: "How Can a ‘Toxin’ be a Medical Treatment?",
    paragraph: "Although a medication with the word “toxin” in the name may seem confusing, BNT injections have decades of research and clinical experience demonstrating that they are a safe and effective medical therapy. When used medically, BNT are transformed into a therapeutic agent by complex manufacturing processes. The doses used to treat dystonia are far less than the amount that would even begin to make a person ill from botulism."
  },

  riskFactors: {
    heading: "How do Botulinum Neurotoxin Injections Work?",
    points: [
      "When BNT is injected into muscles affected by dystonia, it blocks the neurotransmitter chemicals that signal the muscles to contract and spasm excessively.",
      "The muscle is weakened and therefore relaxes, reducing the dystonia.",
      "Prior to the introduction of BNT in the United States during the 1980s, there was essentially no treatment for focal dystonias, and generalized dystonias were managed with oral medications and irreversible brain surgery.",
      "Are These the Same Injections Used for Wrinkles?",
      "Botulinum neurotoxin injections is used for both medical and cosmetic purposes.",
      "The doses and muscles injected may be vastly different, depending on the patient."
    ]
  }
},

  {
  label: "End-to-End Digital Marketing Solutions", //20
  to: "/treatments/metabolic-syndrome",
  banner: "/assets/banner/metabolic-syndrome.jpg",
  image: "/assets/treatmentPhotos/Metabolic-Disease.jpg",

  // title: "Metabolic syndrome is a cluster of conditions that occur together",
  description: "Metabolic syndrome is a cluster of conditions that occur together, increasing your risk of heart disease, stroke and type 2 diabetes. These conditions include increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol or triglyceride levels.\n\nHaving just one of these conditions doesn't mean you have metabolic syndrome. But it does mean you have a greater risk of serious disease. And if you develop more of these conditions, your risk of complications, such as type 2 diabetes and heart disease, rises even higher.",

  causes: {
    heading: "Symptoms",
    paragraph: "Most of the disorders associated with metabolic syndrome don't have obvious signs or symptoms. One sign that is visible is a large waist circumference. And if your blood sugar is high, you might notice the signs and symptoms of diabetes — such as increased thirst and urination, fatigue, and blurred vision.",
    points: []
  },

  riskFactors: {
    heading: "",
    points: []
  }
},
  ],
};