import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function getIconByName(iconName: string): LucideIcon {
  const Icon = (LucideIcons as any)[iconName];

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found, using default`);
    return LucideIcons.HelpCircle;
  }

  return Icon;
}