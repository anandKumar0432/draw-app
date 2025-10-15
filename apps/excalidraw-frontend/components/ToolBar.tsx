"use client"

import { useState } from "react";
import { Square, Circle, Minus, Pencil, MousePointer } from "lucide-react";

const tools = [
  { id: "select", icon: MousePointer, label: "Select" },
  { id: "rectangle", icon: Square, label: "Rectangle" },
  { id: "circle", icon: Circle, label: "Circle" },
  { id: "line", icon: Minus, label: "Line" },
  { id: "draw", icon: Pencil, label: "Free Draw" },
];

export function Toolbar({ onToolChange }: { onToolChange: (tool: string) => void }) {
  const [activeTool, setActiveTool] = useState("select");

  const handleToolClick = (toolId: string) => {
    setActiveTool(toolId);
    onToolChange(toolId);
  };

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-2 space-x-1">
      {tools.map((tool) => {
        const Icon = tool.icon;
        const isActive = activeTool === tool.id;

        return (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            title={tool.label}
            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-colors border border-transparent 
              ${isActive 
                ? "bg-blue-100 text-blue-600 border-blue-300" 
                : "hover:bg-gray-100 text-gray-600"}`}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}
