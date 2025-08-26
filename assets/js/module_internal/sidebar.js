import { $$, byId } from "js/helper";

export const sidebarHandler = () => {
  $$("[data-sidebar]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      byId("sidebar").classList.toggle("sidebar--is-active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      byId("sidebar").classList.contains("sidebar--is-active") &&
      !byId("sidebar").contains(e.target) &&
      !e.target.closest("[data-sidebar]")
    ) {
      byId("sidebar").classList.remove("sidebar--is-active");
    }
  });

  $$("a, button", byId("sidebar")).forEach((el) => {
    el.addEventListener("click", () => {
      byId("sidebar").classList.remove("sidebar--is-active");
    });
  });
};
