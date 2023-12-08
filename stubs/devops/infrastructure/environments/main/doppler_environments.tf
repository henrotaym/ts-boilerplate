resource "doppler_environment" "local" {
  name = "local"
  slug = "local"
  project = doppler_project.app.name
}
