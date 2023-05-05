import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["fullImgBox", "fullImg"]

  connect() {
  }

  open(event) {
    this.fullImgBoxTarget.style.display = "flex"
    this.fullImgTarget.src = event.target.getAttribute("data-src")
  }

  closeFullImg() {
    this.fullImgBoxTarget.style.display = "none"
  }
}
