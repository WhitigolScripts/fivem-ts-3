// Vector3

type Vector3Options = [number, number, number] | number[];
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
/**
 *
 * @param options Takes number[] or [number, number, number]
 * @returns Returns a Vector3 object (x, y, z)
 * @example
 * const coords = Vector3(GetEntityCoords(playerPed, false));
 */
export function Vector3(options: Vector3Options): Vector3 {
    return {
        x: options[0],
        y: options[1],
        z: options[2],
    };
}
