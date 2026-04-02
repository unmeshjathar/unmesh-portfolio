import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Footer from "./Footer";

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  Object.defineProperty(window, "scrollY", { value: 0, writable: true });
});

describe("Footer", () => {
  it("renders UJ logo", () => {
    render(<Footer />);
    expect(
      screen.getByText("Unmesh Jathar", { exact: false }),
    ).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Footer />);
    expect(screen.getByText(/React Frontend Developer/i)).toBeInTheDocument();
  });

  it("renders email in footer contact", () => {
    render(<Footer />);
    expect(screen.getByText(/contact@unmeshjathar.com/i)).toBeInTheDocument();
  });

  it("renders LinkedIn social link", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    const linkedInLink = links.find((l) =>
      l.getAttribute("href")?.includes("linkedin"),
    );
    expect(linkedInLink).toBeDefined();
  });

  it("renders GitHub social link", () => {
    render(<Footer />);
    const links = document.querySelectorAll("a.social-link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/Unmesh Jathar/i)).toBeInTheDocument();
  });
});
