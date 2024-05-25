#!/usr/bin/env node

import { defineConfig } from "./builder/defineConfig";
import {
    EventHandler,
    NetEventHandler,
} from "./utils/shared/events/eventHandler";
import { Vector2 } from "./utils/shared/vectors/Vector2";
import { Vector3 } from "./utils/shared/vectors/Vector3";
import { Vector4 } from "./utils/shared/vectors/Vector4";

export {
    // Define Config (Builder)
    defineConfig,

    // Shared Utils
    Vector2,
    Vector3,
    Vector4,
    EventHandler,
    NetEventHandler,

    // Server Utils

    // Client Utils
};

console.log(process.cwd());
