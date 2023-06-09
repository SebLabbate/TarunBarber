// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import GalleryController from "./gallery_controller"
application.register("gallery", GalleryController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import ShowhideController from "./showhide_controller"
application.register("showhide", ShowhideController)
