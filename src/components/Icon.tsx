import React from "react";
import {
  Cpu,
  Brain,
  Settings,
  Layers,
  Zap,
  ShieldCheck,
  Lightbulb,
  ShieldAlert,
  Award,
  TrendingUp,
  Eye,
  BrainCircuit,
  Component,
  Wifi,
  Cloud,
  GitBranch,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Menu,
  X,
  MessageSquare,
  ChevronRight,
  Volume2,
  Database
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const iconMap: Record<string, any> = {
    Cpu,
    Brain,
    Settings,
    Layers,
    Zap,
    ShieldCheck,
    Lightbulb,
    ShieldAlert,
    Award,
    TrendingUp,
    Eye,
    BrainCircuit,
    Component,
    Wifi,
    Cloud,
    GitBranch,
    Lock,
    ArrowRight,
    Phone,
    Mail,
    Linkedin,
    MapPin,
    Calendar,
    Clock,
    User,
    CheckCircle,
    Menu,
    X,
    MessageSquare,
    ChevronRight,
    Volume2,
    Database
  };

  const IconComponent = iconMap[name] || Cpu;
  return <IconComponent className={className} size={size} />;
};
