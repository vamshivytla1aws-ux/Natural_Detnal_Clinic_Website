export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  overview: string;
  symptoms: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  category: string;
}

export const SERVICES: Service[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    icon: "🦷",
    tagline: "Save your tooth. Relieve your pain.",
    category: "Restorative",
    description: "Root canal treatment to help save infected teeth and relieve severe toothache, using modern techniques and local anaesthesia.",
    overview:
      "Root Canal Treatment (RCT) is a procedure that removes infected pulp from inside a tooth, cleans and seals the canal, and helps preserve the natural tooth. At Natural Dental Clinic, we use modern techniques and local anaesthesia to help make the procedure as comfortable as possible.",
    symptoms: [
      "Severe toothache or throbbing pain",
      "Prolonged sensitivity to hot or cold",
      "Darkening or discoloration of the tooth",
      "Swelling or tenderness in nearby gums",
      "Persistent pimple on the gums",
      "Cracked or chipped tooth with pain",
    ],
    benefits: [
      "Helps preserve your natural tooth — avoids extraction where clinically possible",
      "Designed to remove infected tissue and relieve symptoms",
      "Restores chewing function where appropriate",
      "Helps prevent spread of infection to adjacent teeth",
      "Can provide long-term results with proper care",
      "Maintains natural smile and appearance",
    ],
    process: [
      { step: "Consultation & X-ray", description: "We assess the tooth with digital X-rays and discuss the treatment plan with you." },
      { step: "Local Anaesthesia", description: "The area is numbed completely so you feel no pain during the procedure." },
      { step: "Pulp Removal", description: "The infected pulp is carefully removed from the root canals." },
      { step: "Cleaning & Shaping", description: "Canals are cleaned, disinfected, and shaped for the filling." },
      { step: "Sealing & Crown", description: "Canals are sealed and a crown is placed to restore the tooth's strength." },
    ],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "With modern local anaesthesia, most patients find the procedure more comfortable than expected. Mild soreness after the appointment is normal and manageable with over-the-counter medication." },
      { question: "How long does it take?", answer: "Most root canal procedures are completed in 1–2 visits, each lasting 60–90 minutes, depending on the complexity of the case." },
      { question: "How long does the treated tooth last?", answer: "With proper oral hygiene and a quality restoration, a root canal treated tooth can remain functional for many years. Individual outcomes vary." },
      { question: "What happens if I delay treatment?", answer: "Untreated dental infections can worsen over time. It is advisable to seek a clinical evaluation promptly if you are experiencing symptoms." },
    ],
    image: "/images/services/root-canal.jpg",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Implants",
    icon: "🏅",
    tagline: "Permanent teeth. Natural look. Confident smile.",
    category: "Restorative",
    description: "Dental implants designed to provide a stable tooth-replacement option that can closely resemble the appearance and function of natural teeth.",
    overview:
      "Dental implants are titanium posts placed into the jawbone to act as artificial tooth roots. They can support crowns, bridges, or dentures, providing a stable tooth-replacement solution. At Natural Dental Clinic, implant suitability is assessed individually, and treatment is planned based on each patient's clinical needs.",
    symptoms: [
      "Missing one or more teeth",
      "Ill-fitting dentures causing discomfort",
      "Difficulty chewing or speaking",
      "Bone loss due to missing teeth",
      "Adjacent teeth shifting into gaps",
      "Self-consciousness about missing teeth",
    ],
    benefits: [
      "Designed to closely resemble the appearance and function of natural teeth",
      "Can provide a long-term tooth replacement option with proper care",
      "May help prevent bone loss in the jaw",
      "Does not require alteration of adjacent healthy teeth",
      "Restores chewing ability",
      "Can improve confidence where tooth loss has been a concern",
    ],
    process: [
      { step: "Evaluation & Planning", description: "Thorough assessment including X-rays to determine bone density and implant suitability." },
      { step: "Implant Placement", description: "Titanium implant is surgically placed into the jawbone under local anaesthesia." },
      { step: "Healing Period", description: "The implant integrates with bone (osseointegration) over 3–6 months." },
      { step: "Abutment Fitting", description: "A connector piece (abutment) is attached to the implant." },
      { step: "Crown Placement", description: "A custom-made crown is fixed to the abutment, completing your new tooth." },
    ],
    faqs: [
      { question: "Am I suitable for dental implants?", answer: "Suitability depends on individual factors including jawbone density, general health, and oral hygiene. We assess each patient individually with X-rays before recommending implants." },
      { question: "How long do implants last?", answer: "With proper oral hygiene and regular dental visits, implants can remain functional for many years. Individual outcomes vary." },
      { question: "Is the procedure painful?", answer: "The surgery is carried out under local anaesthesia. Some soreness after the procedure is normal and manageable with appropriate medication." },
      { question: "How do I care for implants?", answer: "Maintain good oral hygiene — brush twice daily, clean between teeth, and attend regular dental check-ups as recommended." },
    ],
    image: "/images/services/implants.jpg",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortTitle: "Whitening",
    icon: "✨",
    tagline: "Brighter smile. Greater confidence.",
    category: "Cosmetic",
    description: "Professional teeth whitening treatments for a noticeably brighter, more radiant smile.",
    overview:
      "Professional teeth whitening is a safe, effective cosmetic treatment that lightens tooth colour by removing stains and discolouration. At Natural Dental Clinic, we offer supervised whitening treatments that deliver dramatically better results than over-the-counter products, while ensuring your safety and comfort.",
    symptoms: [
      "Yellowing or staining from tea, coffee, or tobacco",
      "General dullness of teeth over time",
      "Discolouration from certain medications",
      "Staining from certain foods and drinks",
      "Self-consciousness about tooth colour",
      "Desire for a more radiant smile",
    ],
    benefits: [
      "Dramatically whiter, brighter smile",
      "Boosts confidence and self-image",
      "Safe, supervised professional treatment",
      "Long-lasting results with proper care",
      "Quick, comfortable treatment",
      "Evenly whitens all visible teeth",
    ],
    process: [
      { step: "Consultation", description: "We assess the current shade and discuss expected results and realistic outcomes." },
      { step: "Gum Protection", description: "A protective barrier is applied to your gums before treatment begins." },
      { step: "Whitening Application", description: "Professional-grade whitening gel is applied to the teeth." },
      { step: "Activation", description: "The gel is activated using a specialised light for optimal results." },
      { step: "Review & Aftercare", description: "Results are reviewed and aftercare instructions are provided for maintaining your new smile." },
    ],
    faqs: [
      { question: "How white will my teeth get?", answer: "Results vary by individual. Most patients achieve 3–8 shades lighter. We discuss realistic expectations during consultation." },
      { question: "Is it safe?", answer: "Yes, professional whitening under dental supervision is safe. We monitor your gum health throughout." },
      { question: "How long do results last?", answer: "Results typically last 6–12 months with proper aftercare. Avoiding staining foods and drinks helps maintain whiteness." },
      { question: "Will it cause sensitivity?", answer: "Some temporary sensitivity is normal. We use sensitivity-reducing formulas and can adjust treatment accordingly." },
    ],
    image: "/images/services/whitening.jpg",
  },
  {
    slug: "braces-orthodontics",
    title: "Braces & Orthodontics",
    shortTitle: "Braces",
    icon: "😁",
    tagline: "Straighten your teeth. Transform your smile.",
    category: "Orthodontic",
    description: "Modern orthodontic solutions for a beautifully aligned, healthy smile at any age.",
    overview:
      "Orthodontic treatment corrects misaligned teeth and jaws, improving both aesthetics and oral health. Natural Dental Clinic offers modern braces and orthodontic solutions for children, teens, and adults. Straight teeth are not just beautiful — they are easier to clean and less prone to damage.",
    symptoms: [
      "Crooked or overcrowded teeth",
      "Gaps between teeth",
      "Overbite, underbite, or crossbite",
      "Difficulty cleaning between crowded teeth",
      "Jaw pain or clicking",
      "Self-consciousness about smile alignment",
    ],
    benefits: [
      "Beautifully straight, aligned smile",
      "Easier to clean teeth reducing decay risk",
      "Improved bite function",
      "Reduces risk of tooth damage from misalignment",
      "Long-lasting, permanent results",
      "Suitable for children and adults",
    ],
    process: [
      { step: "Orthodontic Assessment", description: "Detailed examination of teeth, bite, and jaw alignment. X-rays and impressions may be taken." },
      { step: "Treatment Planning", description: "A personalised treatment plan is designed based on your specific case and goals." },
      { step: "Appliance Fitting", description: "Braces or other orthodontic appliances are custom-fitted to your teeth." },
      { step: "Regular Adjustments", description: "Regular appointments (every 4–8 weeks) to adjust and progress treatment." },
      { step: "Retention Phase", description: "After braces are removed, retainers maintain the new tooth positions long-term." },
    ],
    faqs: [
      { question: "What age is best for orthodontic treatment?", answer: "Treatment can begin as early as age 7 for certain issues, with comprehensive treatment typically starting at 11–14. Adults can also benefit greatly." },
      { question: "How long does treatment take?", answer: "Treatment typically lasts 12–24 months depending on complexity. We provide a timeline estimate after assessment." },
      { question: "Are braces painful?", answer: "Some mild discomfort is normal after adjustments. This usually subsides within 2–3 days and is easily managed." },
      { question: "Will I need to wear a retainer after?", answer: "Yes, retainers are essential to maintain results. We provide full guidance on retainer care." },
    ],
    image: "/images/services/braces.jpg",
  },
  {
    slug: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal",
    shortTitle: "Wisdom Tooth",
    icon: "🦴",
    tagline: "Safe, gentle extractions for lasting relief.",
    category: "Oral Surgery",
    description: "Expert, gentle wisdom tooth extraction to relieve pain and prevent future complications.",
    overview:
      "Wisdom teeth (third molars) often erupt incorrectly, causing pain, crowding, infection, or damage to adjacent teeth. Timely removal prevents serious complications. At Natural Dental Clinic, we perform safe and gentle wisdom tooth extractions with a focus on patient comfort and rapid recovery.",
    symptoms: [
      "Pain or throbbing at the back of the mouth",
      "Swollen, tender, or bleeding gums",
      "Difficulty opening mouth or chewing",
      "Bad breath or unpleasant taste",
      "Jaw stiffness or swelling",
      "Crowding of other teeth",
    ],
    benefits: [
      "Immediate relief from pain and pressure",
      "Prevents infection from spreading",
      "Protects adjacent healthy teeth from damage",
      "Reduces crowding of other teeth",
      "Eliminates risk of cyst or tumour formation",
      "Quick recovery with proper aftercare",
    ],
    process: [
      { step: "Consultation & X-ray", description: "Panoramic X-ray taken to assess tooth position and plan the safest approach." },
      { step: "Anaesthesia", description: "Local anaesthesia ensures the procedure is completely comfortable." },
      { step: "Gentle Extraction", description: "The tooth is carefully loosened and removed with minimal trauma to surrounding tissue." },
      { step: "Site Care", description: "The socket is cleaned and dressed. Stitches may be placed if needed." },
      { step: "Aftercare Guidance", description: "Detailed aftercare instructions, medications, and follow-up appointment provided." },
    ],
    faqs: [
      { question: "Does wisdom tooth removal hurt?", answer: "The procedure itself is painless under local anaesthesia. Mild soreness for 2–3 days after is normal and managed with medication." },
      { question: "How long is the recovery?", answer: "Most patients recover fully within 7–10 days. Following aftercare instructions ensures smooth healing." },
      { question: "Do all wisdom teeth need removal?", answer: "Not always. We only recommend removal when the tooth is causing or likely to cause problems. Each case is evaluated individually." },
      { question: "Can I eat normally after extraction?", answer: "Soft foods are recommended for the first few days. Normal eating usually resumes within a week." },
    ],
    image: "/images/services/wisdom-tooth.jpg",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortTitle: "Children's Dental",
    icon: "👶",
    tagline: "Gentle care for little smiles.",
    category: "Preventive",
    description: "Warm, child-friendly dental care that builds healthy habits and happy smiles from an early age.",
    overview:
      "Children's dental health is the foundation of a lifetime of healthy smiles. Natural Dental Clinic provides a gentle, friendly, and reassuring environment for children. Our approach focuses on prevention, education, and building a positive relationship with dental care from an early age.",
    symptoms: [
      "Child's first dental visit (recommended by age 1)",
      "Toothache or sensitivity in children",
      "Visible decay or spots on milk teeth",
      "Difficulty eating due to dental pain",
      "Gum swelling or abscess",
      "Thumb sucking or teeth grinding habits",
    ],
    benefits: [
      "Establishes healthy dental habits early",
      "Prevents cavities and tooth decay",
      "Child-friendly, fear-free environment",
      "Monitors development of permanent teeth",
      "Educational guidance for parents",
      "Early detection of orthodontic issues",
    ],
    process: [
      { step: "Child-Friendly Welcome", description: "We create a warm, welcoming atmosphere to help children feel at ease." },
      { step: "Gentle Examination", description: "Thorough yet gentle examination of teeth, gums, and jaw development." },
      { step: "Cleaning & Fluoride", description: "Professional cleaning and fluoride application to protect young teeth." },
      { step: "Education", description: "We teach children proper brushing and flossing techniques in a fun way." },
      { step: "Parent Guidance", description: "Advice for parents on diet, habits, and home care for their child's oral health." },
    ],
    faqs: [
      { question: "When should my child first visit the dentist?", answer: "We recommend a first dental visit by age 1 or when the first tooth appears — whichever comes first." },
      { question: "How often should children visit?", answer: "Every 6 months is ideal for check-ups and preventive care." },
      { question: "Are milk teeth important if they fall out anyway?", answer: "Yes! Healthy milk teeth are crucial for eating, speaking, and holding space for permanent teeth to grow correctly." },
      { question: "My child is scared of the dentist. Can you help?", answer: "Absolutely. We specialise in creating a calm, gentle, and fun experience that helps children feel safe and comfortable." },
    ],
    image: "/images/services/pediatric.jpg",
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    shortTitle: "Gum Care",
    icon: "💚",
    tagline: "Healthy gums. Strong foundation for your smile.",
    category: "Periodontal",
    description: "Expert gum disease treatment and laser therapy to restore gum health and protect your teeth.",
    overview:
      "Healthy gums are the foundation of a healthy smile. Gum disease (periodontal disease) is one of the most common causes of tooth loss in adults. Natural Dental Clinic offers advanced gum treatments including scaling, root planing, and laser therapy to treat and prevent gum disease at every stage.",
    symptoms: [
      "Bleeding gums when brushing or flossing",
      "Red, swollen, or tender gums",
      "Gums pulling away from teeth",
      "Persistent bad breath",
      "Loose or shifting teeth",
      "Pus between teeth and gums",
    ],
    benefits: [
      "Eliminates infection and inflammation",
      "Prevents further bone and tooth loss",
      "Reduces bleeding and gum sensitivity",
      "Freshens breath significantly",
      "Protects teeth for the long term",
      "Non-surgical options available",
    ],
    process: [
      { step: "Gum Assessment", description: "Thorough examination of gum depth, bleeding, and bone levels using probing and X-rays." },
      { step: "Scaling & Root Planing", description: "Deep cleaning to remove tartar, plaque, and bacteria from above and below the gumline." },
      { step: "Laser Therapy", description: "Advanced laser treatment to target bacteria and promote gum tissue healing." },
      { step: "Antimicrobial Treatment", description: "Antibiotics or antimicrobial rinses may be prescribed to support healing." },
      { step: "Maintenance Program", description: "A personalised hygiene maintenance schedule to keep gum disease from returning." },
    ],
    faqs: [
      { question: "Is gum disease reversible?", answer: "Early gum disease (gingivitis) is fully reversible with proper treatment. Advanced cases (periodontitis) can be managed and stabilised but not fully reversed." },
      { question: "Is the treatment painful?", answer: "Deep cleaning is done with local anaesthesia for comfort. Mild soreness after is normal and short-lived." },
      { question: "Can gum disease affect my overall health?", answer: "Yes. Research links gum disease to heart disease, diabetes, and other systemic conditions. Treating it benefits your whole-body health." },
      { question: "How many appointments are needed?", answer: "Typically 2–4 appointments depending on severity, followed by regular maintenance visits every 3–6 months." },
    ],
    image: "/images/services/gum-treatment.jpg",
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    shortTitle: "Crowns & Bridges",
    icon: "👑",
    tagline: "Restore strength. Renew your smile.",
    category: "Restorative",
    description: "High-quality dental crowns and bridges that restore damaged teeth and fill gaps beautifully.",
    overview:
      "Dental crowns cap and protect damaged, weakened, or root-treated teeth, restoring their full strength and appearance. Bridges replace one or more missing teeth using crowns on adjacent teeth as anchors. At Natural Dental Clinic, we use high-quality materials for crowns and bridges that look natural and last for years.",
    symptoms: [
      "Severely decayed or damaged tooth",
      "Cracked or broken tooth",
      "Tooth after root canal treatment",
      "Missing one or more teeth",
      "Worn-down teeth",
      "Cosmetically imperfect teeth",
    ],
    benefits: [
      "Restores full strength and function",
      "Protects weakened teeth from breaking",
      "Natural-looking, aesthetic results",
      "Fills gaps to restore smile and function",
      "Prevents adjacent teeth from shifting",
      "Long-lasting with proper care",
    ],
    process: [
      { step: "Consultation & Planning", description: "Assessment of the tooth and surrounding structure. Shade matching for aesthetic crowns." },
      { step: "Tooth Preparation", description: "The tooth is shaped to accommodate the crown. Local anaesthesia ensures comfort." },
      { step: "Impression", description: "Precise impressions are taken for custom fabrication of your crown or bridge." },
      { step: "Temporary Crown", description: "A temporary crown is fitted while your permanent one is being crafted." },
      { step: "Permanent Fitting", description: "The final crown or bridge is checked for fit, bite, and aesthetics before being permanently cemented." },
    ],
    faqs: [
      { question: "How long do crowns last?", answer: "High-quality crowns typically last 10–15 years or more with good oral hygiene and care." },
      { question: "Will a crown look natural?", answer: "Yes. We use tooth-coloured porcelain or ceramic materials that blend seamlessly with natural teeth." },
      { question: "Is the procedure painful?", answer: "The procedure is done under local anaesthesia. You may feel mild sensitivity after, which resolves quickly." },
      { question: "How do I care for my crown or bridge?", answer: "Brush twice daily, floss carefully around the bridge, and attend regular check-ups. Avoid very hard or sticky foods." },
    ],
    image: "/images/services/crowns-bridges.jpg",
  },
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortTitle: "General Dental",
    icon: "🔬",
    tagline: "Preventive care for lifelong oral health.",
    category: "Preventive",
    description: "Comprehensive preventive and general dental care to keep your teeth and gums healthy for life.",
    overview:
      "Good oral health starts with regular preventive care. Our general dentistry services include routine check-ups, professional cleanings, fillings, and early detection of dental issues before they become serious. Natural Dental Clinic is your partner in maintaining excellent oral health at every stage of life.",
    symptoms: [
      "Due for a routine check-up",
      "Tooth sensitivity or mild pain",
      "Visible decay or dark spots",
      "Chipped or broken tooth",
      "Yellow teeth or tartar buildup",
      "Gum irritation or bleeding",
    ],
    benefits: [
      "Early detection prevents costly treatments",
      "Professional cleaning removes stubborn tartar",
      "Maintains oral health and fresh breath",
      "Monitors and treats issues before they worsen",
      "Comprehensive care for all ages",
      "Personalised oral health advice",
    ],
    process: [
      { step: "Examination", description: "Thorough examination of teeth, gums, bite, and oral tissues." },
      { step: "X-rays", description: "Diagnostic X-rays to detect issues not visible to the naked eye." },
      { step: "Cleaning", description: "Professional cleaning to remove plaque, tartar, and surface stains." },
      { step: "Treatment", description: "Any necessary treatments such as fillings, extractions, or referrals." },
      { step: "Preventive Advice", description: "Personalised guidance on diet, brushing, flossing, and future prevention." },
    ],
    faqs: [
      { question: "How often should I visit the dentist?", answer: "Every 6 months for most people. Some may need more frequent visits depending on their oral health status." },
      { question: "What happens during a check-up?", answer: "We examine teeth and gums, take X-rays if needed, perform professional cleaning, and discuss any concerns." },
      { question: "Are fillings noticeable?", answer: "We use tooth-coloured composite resin fillings that match your natural tooth colour — virtually invisible." },
      { question: "Is preventive care important even if I have no pain?", answer: "Yes! Many dental issues are painless until advanced. Regular check-ups catch problems early when they are easiest and cheapest to treat." },
    ],
    image: "/images/services/general-dentistry.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_CATEGORIES = [...new Set(SERVICES.map((s) => s.category))];
