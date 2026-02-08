"use client";

import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  /** Optional class for the panel */
  className?: string;
};

/**
 * Accessible modal: overlay + panel, close on overlay click or Escape.
 */
export function Modal({ isOpen, onClose, title, children, className = "" }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 transition-opacity"
        aria-label="Close modal"
      />
      <div
        ref={panelRef}
        className={`relative z-10 w-full max-w-md rounded-2xl border border-border bg-surface shadow-elevation-md ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4 dark:border-gray-700">
          <h2 id="modal-title" className="font-display text-xl font-semibold text-foreground">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-gray-100 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-gray-800"
            aria-label="Close"
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
