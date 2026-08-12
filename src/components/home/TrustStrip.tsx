import { Shield, Zap, Heart, Star, Users } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { icon: Shield, text: "Experienced Care" },
    { icon: Zap, text: "Advanced Treatments" },
    { icon: Heart, text: "Patient-Centered" },
    { icon: Star, text: "Hygiene & Safety" },
    { icon: Users, text: "Personalized Attention" },
  ];

  return (
    <div className="bg-forest-600 py-6 border-t border-white/10 overflow-hidden">
      <div className="container-premium">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm md:text-base whitespace-nowrap">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
