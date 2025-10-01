
import { Shield, Banknote, PieChart } from "lucide-react";
import { ProblemCardData } from "./ProblemCard";
import { StatItemData } from "./StatCard";

// Problem cards for the grid - reordered as requested: Accessibility, Affordability, Complexity
export const problemCards: ProblemCardData[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Accessibility",
    description: "Small business owners lack the time and expertise to navigate insurance markets, leaving their employees underserved.",
    color: "#00348F",
    delay: "0ms"
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Affordability",
    description: "Employee benefits are typically priced for large enterprises, making quality coverage prohibitively expensive for small businesses.",
    color: "#5791F3",
    delay: "100ms"
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Complexity",
    description: "Small businesses struggle with the complexity of traditional employee benefits solutions, facing mountains of paperwork and confusing options.",
    color: "#15CB94",
    delay: "200ms"
  }
];

// Statistics for the financial vulnerability section
export const statistics: StatItemData[] = [
  {
    value: "78%",
    label: "of SMBs struggle with benefits administration",
    color: "#00348F",
    icon: <Shield className="w-6 h-6" />
  },
  {
    value: "3.2x",
    label: "higher cost for small businesses compared to enterprises",
    color: "#5791F3",
    icon: <Banknote className="w-6 h-6" />
  },
  {
    value: "40hrs",
    label: "monthly spent on benefits paperwork and administration",
    color: "#15CB94",
    icon: <PieChart className="w-6 h-6" />
  }
];
