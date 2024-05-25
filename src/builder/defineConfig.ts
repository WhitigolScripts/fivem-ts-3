interface DefineConfigOptions {
    outDir?: string;
    outOverride?: {
        from: string;
        to: string;
    }[];
    obfuscate?: boolean;
    minify?: boolean;
}

let config: DefineConfigOptions = {
    outDir: "dist",
    outOverride: [],
    obfuscate: false,
    minify: false,
};

export function defineConfig(
    options: DefineConfigOptions = {
        outDir: "dist",
        outOverride: [],
        obfuscate: false,
        minify: false,
    }
) {
    config = options;
}

export function getConfig() {
    return config;
}
