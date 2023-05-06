import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="showhide"
export default class extends Controller {
  static targets = [
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

  hideOtherSections(sectionTarget, buttonTarget) {
    this.servicesSectionTarget.classList.add("d-none");
    this.hoursSectionTarget.classList.add("d-none");
    this.findusSectionTarget.classList.add("d-none");
    this.gallerySectionTarget.classList.add("d-none");

    sectionTarget.classList.remove("d-none");

    this.servicesBtnTarget.classList.remove("selected-link");
    this.hoursBtnTarget.classList.remove("selected-link");
    this.findBtnTarget.classList.remove("selected-link");
    this.galleryBtnTarget.classList.remove("selected-link");

    buttonTarget.classList.add("selected-link");
  }

  displayServices() {
    this.hideOtherSections(this.servicesSectionTarget, this.servicesBtnTarget);
  }

  displayHours() {
    this.hideOtherSections(this.hoursSectionTarget, this.hoursBtnTarget);
  }

  displayFind() {
    this.hideOtherSections(this.findusSectionTarget, this.findBtnTarget);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  displayGallery() {
    this.hideOtherSections(this.gallerySectionTarget, this.galleryBtnTarget);
  }
}
