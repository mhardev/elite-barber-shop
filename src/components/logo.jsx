import { cn } from "@/lib/utils"

export const Logo = ({ className, uniColor = false }) => {
  return (
    <svg
      viewBox="0 0 220 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Elite Barber Shop Logo"
      className={cn(
        "h-8 w-auto text-foreground transition-all duration-300 ease-out",
        "hover:scale-[1.03] hover:text-[#C9A24D]",
        className
      )}
    >
      {/* Scissors Icon */}
      <g
        stroke={uniColor ? "currentColor" : "url(#logo-gradient)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="14" r="4" />
        <circle cx="16" cy="26" r="4" />
        <line x1="20" y1="18" x2="34" y2="6" />
        <line x1="20" y1="22" x2="34" y2="34" />
      </g>

      {/* Brand Text */}
      <text
        x="50"
        y="26"
        fontSize="18"
        fontWeight="600"
        letterSpacing="2"
        fill="currentColor"
        fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
      >
        ELITE BARBER
      </text>

      {/* Gradient */}
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9A24D" />
          <stop offset="1" stopColor="#8B6B2E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const LogoIcon = ({ className, uniColor = false }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Elite Barber Icon"
      className={cn(
        "size-8 text-foreground transition-all duration-300 ease-out",
        "hover:scale-110 hover:text-[#C9A24D]",
        className
      )}
    >
      <g
        stroke={uniColor ? "currentColor" : "url(#logo-gradient)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="4" />
        <circle cx="14" cy="26" r="4" />
        <line x1="18" y1="18" x2="32" y2="6" />
        <line x1="18" y1="22" x2="32" y2="34" />
      </g>

      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="40"
        >
          <stop stopColor="#C9A24D" />
          <stop offset="1" stopColor="#8B6B2E" />
        </linearGradient>
      </defs>
    </svg>
  )
}
