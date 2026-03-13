'use client';
import './switch.css';

interface Props {
  escuro: boolean;
  onChange: (v: boolean) => void;
}

export default function ThemeToggle({ escuro, onChange }: Props) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={escuro}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider"></span>
    </label>
  );
}
