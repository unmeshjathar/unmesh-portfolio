import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders section title", () => {
    render(<Projects />);
    expect(screen.getByText("Project Experience")).toBeInTheDocument();
  });

  it("renders All filter tab active by default", () => {
    render(<Projects />);
    const allTab = screen.getByText("All");
    expect(allTab.classList.contains("active")).toBe(true);
  });

  it("renders filter tabs", () => {
    render(<Projects />);
    const tabs = document.querySelectorAll(".filter-tab");
    expect(tabs.length).toBeGreaterThan(1);
    expect(tabs[0].textContent).toBe("All");
  });

  it("filters projects when tab is clicked", () => {
    render(<Projects />);
    const allCards = document.querySelectorAll(".project-card").length;
    const tab = document.querySelectorAll(".filter-tab")[1] as HTMLElement;
    fireEvent.click(tab);
    expect(tab.classList.contains("active")).toBe(true);
    const filteredCards = document.querySelectorAll(".project-card").length;
    expect(filteredCards).toBeLessThanOrEqual(allCards);
  });

  it("renders project cards", () => {
    render(<Projects />);
    const cards = document.querySelectorAll(".project-card");
    expect(cards.length).toBeGreaterThan(0);
  });
});
