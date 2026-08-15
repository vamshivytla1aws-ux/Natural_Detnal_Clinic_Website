import {
  Activity,
  Baby,
  Crown,
  Heart,
  Microscope,
  Shield,
  Smile,
  Sparkles,
  Star,
  type LucideProps,
} from "lucide-react";

const ICONS = { Activity, Baby, Crown, Heart, Microscope, Shield, Smile, Sparkles, Star };

export function ServiceIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = ICONS[name as keyof typeof ICONS] ?? Shield;
  return <Icon aria-hidden="true" {...props} />;
}
