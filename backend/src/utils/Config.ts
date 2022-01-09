enum ConfigKeys {
  PORT = "PORT",
}

const ConfigHelper = {
  getItem: (key: ConfigKeys): string => {
    return process.env[key] ?? "";
  },
};

export { ConfigHelper, ConfigKeys };
