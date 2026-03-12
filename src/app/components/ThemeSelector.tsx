import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sun, Moon, Palette } from "lucide-react";

const themes = [
  { id: "nature-light", name: "Nature Light", icon: Sun },
  { id: "midnight-forest", name: "Midnight Forest", icon: Moon },
  { id: "strawberry-sunset", name: "Strawberry Sunset", icon: Palette },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as any);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <currentTheme.icon className="w-4 h-4" />
          {currentTheme.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme Selection</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => handleThemeChange(t.id)}
            className={theme === t.id ? "bg-accent text-accent-foreground" : ""}
          >
            <t.icon className="mr-2 h-4 w-4" />
            <span>{t.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

