export async function load(pluginName) {
  orca.themes.register(pluginName, "magic-paper-theme", "theme.css");
}

export async function unload() {
  orca.themes.unregister("magic-paper-theme");
}
