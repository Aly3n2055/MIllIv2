import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// CSS custom property generation for gradients
export function cssGradient(from: string, to: string, direction = 'r') {
  return `bg-gradient-to-${direction} from-${from} to-${to}`;
}

// Add custom styles to the document
export function injectStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes dash {
      from {
        stroke-dashoffset: 1000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    
    .path-animation {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dash 5s linear alternate infinite;
    }
    
    @keyframes pulse-slow {
      50% {
        opacity: 0.5;
      }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    .animation-delay-300 {
      animation-delay: 0.3s;
    }
    
    .animation-delay-600 {
      animation-delay: 0.6s;
    }
    
    .gradient-text {
      background: linear-gradient(90deg, #4f46e5, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
  document.head.appendChild(styleSheet);
}
