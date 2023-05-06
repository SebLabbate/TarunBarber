import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="showhide"
export default class extends Controller {
  static targets =
  [
    "servicesBtn",
    "hoursBtn",
    "findBtn",
    "galleryBtn",
    "servicesSection",
    "hoursSection",
    "findusSection",
    "gallerySection"
  ]

  connect() {
  }

  hideOtherSections(sectionTarget) {
    this.servicesSectionTarget.classList.add("d-none");
    this.hoursSectionTarget.classList.add("d-none");
    this.findusSectionTarget.classList.add("d-none");
    this.gallerySectionTarget.classList.add("d-none");

    sectionTarget.classList.remove("d-none");
  }

  displayServices() {
    this.hideOtherSections(this.servicesSectionTarget);
  }

  displayHours() {
    this.hideOtherSections(this.hoursSectionTarget);
  }

  displayFind() {
    this.hideOtherSections(this.findusSectionTarget);
  }

  displayGallery() {
    this.hideOtherSections(this.gallerySectionTarget);
  }
}
