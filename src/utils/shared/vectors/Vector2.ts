type Vector2Options = [number, number] | number[];
export interface Vector2 {
    x: number;
    y: number;
}
/**
 *
 * @param options Takes number[] or [number, number]
 * @returns Returns a Vector2 object (x, y)
 * @example
 * const coords = Vector2(GetEntityCoords(playerPed, false));
 */
export function Vector2(options: Vector2Options): Vector2 {
    return {
        x: options[0],
        y: options[1],
    };
}
