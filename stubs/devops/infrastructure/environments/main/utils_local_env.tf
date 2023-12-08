locals {
  local_app_key = "${var.TRUSTUP_APP_KEY}-local"
}

locals {
  dev_env = {
    APP_NAME = var.TRUSTUP_APP_KEY
    APP_ENV = "local"
    APP_URL = "https://${var.TRUSTUP_APP_KEY}.docker.localhost"
    VITE_PORT = lookup(data.doppler_secrets.local.map, "VITE_PORT", data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT)
  }
}