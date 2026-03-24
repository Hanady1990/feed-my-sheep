import { saints } from "./saints";
import type { Saint } from "./saints";

export type { Saint as SaintOfTheDay };

/** Returns a saint based on the day of the year, cycling through the list. */
export function getSaintOfTheDay(): Saint {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return saints[dayOfYear % saints.length];
}
