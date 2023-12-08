resource "doppler_secret" "ci_commons_local_vite_port" {
  project = local.ci_commons.project
  config = local.ci_commons.config
  name = "LOCAL_VITE_PORT"
  value = data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT == local.dev_env.VITE_PORT ? sum([data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT, 1]) : data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT
}

resource "doppler_secret" "local_environment_secrets" {
  for_each = local.dev_env
  project = doppler_project.app.name
  config = doppler_environment.local.slug
  name = each.key
  value = each.value
}
