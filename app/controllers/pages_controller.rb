class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %I[home tarun contact]

  def home
    @markers =
      [{
        lat: 52.9381732751361652,
        lng: -1.1404715734755337,
        info_window_html: render_to_string(partial: "info_window")
      }]
  end

  def tarun
  end

  def contact
    @markers =
      [{
        lat: 52.9381732751361652,
        lng: -1.1404715734755337,
        info_window_html: render_to_string(partial: "info_window")
      }]
  end
end
