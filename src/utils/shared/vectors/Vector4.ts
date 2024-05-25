// Vector4
type Vector4Options = [number, number, number, number] | number[];
export interface Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
/**
 *
 * @param options Takes number[] or [number, number, number, number]
 * @returns Returns a Vector4 object (x, y, z, w)
 * @example
 * const coords = Vector4(GetEntityCoords(playerPed, false));
 */
export function Vector4(options: Vector4Options): Vector4 {
    return {
        x: options[0],
        y: options[1],
        z: options[2],
        w: options[3],
    };
}
