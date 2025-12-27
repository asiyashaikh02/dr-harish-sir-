import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export enum BrandColor {
  NAVY = 'Navy',
  TEAL = 'Teal',
  GOLD = 'Gold',
  CREAM = 'Cream',
  GREY = 'Grey'
}

export interface DesignSystemColor {
  name: string;
  hex: string;
  psychology: string;
  usage: string;
}