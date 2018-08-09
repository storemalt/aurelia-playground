export function configure(config) {
  config.globalResources([
      PLATFORM.moduleName('./exclamation-value-converter'),
      PLATFORM.moduleName('./json-value-converter'),
      PLATFORM.moduleName('./reverse-string-value-converter'),
      PLATFORM.moduleName('./reverse-value-converter'),
      PLATFORM.moduleName('./upper-case-value-converter'),
  ]);
}
