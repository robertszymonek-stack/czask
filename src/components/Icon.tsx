type Props = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "h-6 w-6" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4L15 11l-2-2 1.7-2.7Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "snowflake":
      return (
        <svg {...common}>
          <path d="M12 2v20M4.2 7.2 19.8 16.8M4.2 16.8 19.8 7.2" />
          <path d="M12 5.5 9.5 3M12 5.5 14.5 3M12 18.5 9.5 21M12 18.5 14.5 21M5.5 8.5 3 7.5M5.5 8.5 4.5 11M18.5 15.5 21 16.5M18.5 15.5 19.5 13" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 5 5L20 7" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="m12 2 3 7 7 .7-5.3 4.8 1.6 7-6.3-3.8-6.3 3.8 1.6-7L2 9.7 9 9Z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M6 18 18 6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M7 7h4v4H8c0 3 1 4 3 4v2c-3 0-5-2-5-6V7Zm8 0h4v4h-3c0 3 1 4 3 4v2c-3 0-5-2-5-6V7Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "wind":
      return (
        <svg {...common}>
          <path d="M17.7 7.7A2.5 2.5 0 0 1 17 12H3" />
          <path d="M9.6 4.6A2 2 0 0 1 11 8H3" />
          <path d="M12.6 19.4A2 2 0 0 0 14 16H3" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "thermometer":
      return (
        <svg {...common}>
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z" />
          <circle cx="11.5" cy="17.5" r="1.5" />
          <path d="M11.5 6v8" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...common}>
          <path d="M4 20 20 4" />
          <path d="M6 14 10 18 18 10 14 6 6 14Z" />
          <path d="M12 8l4 4M9.5 10.5l4 4" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "brick":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="10" rx="1.5" />
          <path d="M3 12h18M8 7v5M16 12v5M13 7v5" />
        </svg>
      );
    case "hourglass":
      return (
        <svg {...common}>
          <path d="M6 2h12M6 22h12" />
          <path d="M7 2c0 4 3 5 5 7-2 2-5 3-5 7m10-14c0 4-3 5-5 7 2 2 5 3 5 7" />
        </svg>
      );
    case "crane":
      return (
        <svg {...common}>
          <path d="M4 21V6h4M8 6l8-3v3h4v3h-6M14 9v12M10 21h8M18 9v4l-3 2" />
        </svg>
      );
    case "broom":
      return (
        <svg {...common}>
          <path d="M15 3 4 14" />
          <path d="m14 4 6 6" />
          <path d="M3 15c3 0 6 1 8 3-2 2-5 3-8 3v-6Z" />
        </svg>
      );
    case "receipt-off":
      return (
        <svg {...common}>
          <path d="M6 3h10l2 2v16l-3-2-3 2-3-2-3 2V9" />
          <path d="M8 8h6M8 12h2" />
          <path d="M3 3l18 18" />
        </svg>
      );
    case "building-front":
      return (
        <svg {...common}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-5h6v5M8 9h1M11 9h1M14 9h1M8 12h1M11 12h1M14 12h1" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M10 11 8 9a3 3 0 0 0-4 0L2 11l4 4 2-2" />
          <path d="M14 11l2-2a3 3 0 0 1 4 0l2 2-4 4-2-2" />
          <path d="m8 13 2 2a2 2 0 0 0 2.8 0l3.2-3.2a2 2 0 0 0 0-2.8l-1-1" />
        </svg>
      );
    case "file-badge":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8Z" />
          <path d="M14 2v6h6" />
        </svg>
      );
    case "bolt-badge":
      return (
        <svg {...common}>
          <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
        </svg>
      );
    case "trophy-badge":
      return (
        <svg {...common}>
          <path d="M8 21h8M12 17v4M8 4h8v4a4 4 0 0 1-8 0V4Z" />
          <path d="M16 5h3a2 2 0 0 1-2 2h-1M8 5H5a2 2 0 0 0 2 2h1" />
        </svg>
      );
    case "clipboard-badge":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4.5h6M9 9h6M9 13h6M9 17h4" />
          <path d="M10 2h4a1 1 0 0 1 1 1v2H9V3a1 1 0 0 1 1-1Z" />
        </svg>
      );
    default:
      return null;
  }
}
